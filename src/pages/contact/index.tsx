/* eslint-disable @next/next/no-img-element */
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Separator from '@/components/ui/Separator';
import TextArea from '@/components/ui/TextArea';
import FollowUs from '../../components/shared/followUs/FollowUs';
import EmbeddedMap from '@/components/shared/EmbeddedMap';

const ContactUs = () => {
  return (
    <div>
      <EveryPageHeroSection title="CONTACT US" imageUrl="/images/landing.jpg" />

      <Container className="my-20">
        <section className="flex flex-col justify-center items-center gap-5">
          <div className="text-center my-4">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              GET IN TOUCH{' '}
            </h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
          </div>
          <Separator />
          <p className="paragraph">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
          {/* form div  */}
          <div className="lg:h-[500px] w-full gap-4 lg:gap-0 rounded-md shadow-md flex md:flex-row flex-col items-center  border mt-8">
            <div className=" md:flex-1 h-full w-full py-4 px-10 rounded-xl">
              <img
                className="h-full w-full  object-cover"
                src="/images/contact.jpg"
                alt="land"
              />
            </div>
            <div className="px-16 lg:py-0 py-4 w-full md:flex-1">
              <form className="w-full">
                <div className="grid grid-cols-2 gap-3">
                  <Input className="my-2" placeholder="Name*" />
                  <Input className="my-2" placeholder="Phone*" />
                  <Input className="my-2" placeholder="Email*" />
                  <Input className="my-2" placeholder="Website*" />
                  <TextArea className="col-span-2 my-2" placeholder="Message" />
                </div>
                <Button className="bg-blue-800 px-8 py-3 text-white rounded-md mt-14 w-fit">
                  SEND A MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </section>
      </Container>
      <FollowUs />
      <EmbeddedMap
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116843.50613203371!2d90.0865884!3d23.770207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebef35f05bfd%3A0x2db6405916fbd940!2sBlue%20Sky%20City%20Limited!5e0!3m2!1sen!2sbd!4v1748670430749!5m2!1sen!2sbd"
        title="Blue Sky City Limited Location"
        height="h-[400px]"
      />
    </div>
  );
};

export default ContactUs;