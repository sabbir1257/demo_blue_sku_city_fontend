import Container from '@/components/ui/Container';
import Link from 'next/link';

const BottomFooter = () => {
  return (
    <section className="py-2 bg-blue-950 text-gray-100">
      <Container className="flex lg:flex-row flex-col justify-between items-center">
        <p className="lg:font-medium font-semibold tracking-wider lg:w-[40%] ">
          Copyright © 2025 All rights reserved | This template is made with by{' '}
          <Link
            href="https://paradisesolution.us/"
            target="_blank"
            className="text-purple-800 font-bold cursor-pointer"
          >
            Paradise Solution
          </Link>
        </p>
        <ul className="flex gap-8 flex-wrap lg:my-0 my-6 items-center">
          {[
            { href: '/termsAndCondition', text: 'Terms & Condition' },
            { href: '/privacyPolicy', text: 'Privacy & Policy' },
            { href: '/faq', text: "FAQ's" },
            { href: '/contact', text: 'Contact' },
          ].map((item, index) => (
            <li key={index} className="relative group">
              <Link href={item.href} className="inline-block relative">
                {item.text}
                <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BottomFooter;
