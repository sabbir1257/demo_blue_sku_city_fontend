/* eslint-disable @next/next/no-img-element */
import React from 'react';
import OurPartners from './OurPartners';
import BottomFooter from './BottomFooter';
import Container from '@/components/ui/Container';
import {
  CalenderIcon,
  EmailSendIcon,
  PhoneCallIcon,
  WhatsAppIcon,
} from '@/components/Icons/Icons';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import RecentPostCard from '@/components/pages/blog/RecentPostCard';
import Link from 'next/link';
import EmbeddedMap from '../EmbeddedMap';

const Footer = () => {
  return (
    <footer>
      {/* our partners  */}
      <OurPartners />
      {/* main footer  */}
      <section className="py-10 bg-blue-900 text-gray-50">
        <Container>
          <div className="grid lg:grid-cols-7 md:grid-cols-4 grid-cols-1 gap-8 lg:gap-3">
            {/* div 1  */}
            <div className="col-span-2">
              <h5 className="title1 mb-6">Our Office</h5>
              <div className="">
                <h4>
                  Dhaka Office : MuktoBangla Shpping Complex,Space # 49/50 (5th
                  Floor), Plot- 04, Mirpur-1, Dhaka-1216, Bangladesh.
                </h4>
                <div className="flex items-center pt-2 text-xl gap-3 group">
                  <PhoneCallIcon />
                  <div className="relative">
                    <a
                      href="tel:01984867459"
                      className="inline-block relative"
                      target="_blank"
                    >
                      01984867459
                    </a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>

                <div className="flex items-center pt-2 text-xl gap-3 group">
                  <EmailSendIcon />
                  <div className="relative">
                    <a
                      href="mailto:DeveloperOvi@gmail.com"
                      className="inline-block relative"
                      target="_blank"
                    >
                      DeveloperOvi@gmail.com
                    </a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>

                <div className="flex items-center pt-2 text-xl gap-3 group">
                  <WhatsAppIcon />
                  <div className="relative">
                    <a
                      href=""
                      className="inline-block relative"
                      target="_blank"
                    >
                      01984867459
                    </a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* div 2  */}
            <div className="lg:px-0 px-4 col-span-2 lg:ml-10">
              <h1 className="title1 mb-6">Services</h1>
              <ul className="flex flex-col gap-1 font-medium list-none">
                {[
                  { href: '/career', text: 'Career' },
                  { href: '/testimonial', text: 'Testimonial' },
                  { href: '/gallery', text: 'Gallery' },
                  { href: '/downloadForms', text: 'Download Forms' },
                  {href: 'alocationPolicy', text: 'Alocation Policy'},
                ].map((item, index) => (
                  <li key={index} className="relative group">
                    <Link href={item.href} className="inline-block relative">
                      {item.text}
                      <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* div 3 */}
            <div className="lg:px-0 px-4 col-span-3 lg:ml-10">
              <EmbeddedMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5630738746713!2d90.34996747608!3d23.798568386924053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e900000001%3A0x85b866bce4c4a5f!2sBlue%20Sky%20CIty%20Limited!5e0!3m2!1sen!2sbd!4v1751521190918!5m2!1sen!2sbd" 
              height="h-[280px]"
              />
            </div>
          </div>
        </Container>
      </section>
      {/* bottom part  */}
      <BottomFooter />
    </footer>
  );
};

export default Footer;
