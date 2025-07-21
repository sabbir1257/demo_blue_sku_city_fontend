"use client";

import React, { useEffect, useState, useRef } from "react";

interface StatItem {
  label: string;
  unit: string;
  index: number;
  divideBy?: number;
}

const TotalAnalysis: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const ref = useRef<HTMLDivElement | null>(null);

  const targetValues: number[] = [30, 100, 53000, 24]; // Target numbers

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setCounts((prevCounts) =>
              prevCounts.map((count, index) =>
                count < targetValues[index]
                  ? Math.min(
                      count + Math.ceil(targetValues[index] / 100),
                      targetValues[index]
                    )
                  : count
              )
            );
          }, 20);

          setTimeout(() => clearInterval(interval), 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    { label: "Years of Excellence", unit: "+", index: 0 },
    { label: "Client Satisfaction", unit: "%", index: 1 },
    { label: "Cases Completed", unit: "K", index: 2, divideBy: 1000 },
    { label: "Consultants", unit: "", index: 3 },
  ];

  return (
    <div ref={ref} className="grid lg:grid-cols-4 grid-cols-2 gap-16">
      {stats.map(({ label, unit, index, divideBy }) => (
        <div key={index} className="flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-3xl mb-3">
            {divideBy ? (counts[index] / divideBy).toFixed(0) : counts[index]}
            <span className="text-3xl">{unit}</span>
          </h1>
          <p className="paragraph">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default TotalAnalysis;
