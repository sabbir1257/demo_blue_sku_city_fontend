import Container from '@/components/ui/Container';
import Image from 'next/image';

const OurPartners = () => {
  const logos = [
    '/images/Logo_PNG.png',
    '/images/logo/p-2.png',
    '/images/logo/p-3.png',
    '/images/logo/p-4.png',
    '/images/logo/p-5.png',
  ];

  return (
    <section className="bg-gray-100 py-6">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`partner-logo-${i}`}
              className="w-30 h-20 filter grayscale brightness-75 hover:grayscale-0   p-3 "
              width={100}
              height={100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurPartners;