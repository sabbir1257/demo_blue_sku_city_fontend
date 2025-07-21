import React from 'react';
import TotalAnalysis from '@/components/shared/TotalAnalysis';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <Container>
        <section
          className="w-full lg:h-[70vh]"
          style={{
            backgroundImage: "url('/images/pattern.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="flex flex-col justify-center items-center md:p-20 p-10">
            <h1 className="text-2xl font-semibold uppercase">Company Success</h1>
            <h1 className="text-4xl font-bold tracking-wider mt-3">
              Some fun facts about our consulting
            </h1>

            <div className="mt-10">
              <TotalAnalysis />
            </div>

            <Button className="bg-blue-800 rounded-md text-white mt-14 px-8 py-3">
              VIEW CASE STUDIES
            </Button>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default CaseStudies;