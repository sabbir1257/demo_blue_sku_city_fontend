/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const RecentPostCard = () => {
  return (
    <div className="flex gap-2 flex-col">
      {[
        { href: "/", text: "Terms And Condition" },
        { href: "/", text: "Privacy And Policy" },
        { href: "/", text: "FAQ" },
      ].map((item, index) => (
        <div key={index} className="relative group">
          <Link href={item.href} className="inline-block relative">
            {item.text}
            <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecentPostCard;
