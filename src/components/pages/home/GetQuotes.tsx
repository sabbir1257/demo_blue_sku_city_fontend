import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const GetQuotes: React.FC = () => {
  return (
    <div
      className="relative w-full h-[350px] mb-20 parallax"
      style={{
        backgroundImage: "url('/images/land1.jpg')",
      }}
    >
      <div className="absolute top-0 w-full h-full text-white bg-[#000000b2]">
        <Container className="text-center flex flex-col items-center w-full h-full justify-center gap-8">
          <h1 className="lg:text-5xl text-2xl font-medium text-gray-200">
            We provide high quality services & innovative
            <br /> solutions for the reliable growth
          </h1>
          <Button className="bg-blue-800 px-10 py-3 rounded-sm">GET A QUOTES</Button>
        </Container>
      </div>
    </div>
  );
};

export default GetQuotes;
