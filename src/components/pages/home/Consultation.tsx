/* eslint-disable @next/next/no-img-element */
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Separator from '@/components/ui/Separator';
import TextArea from '@/components/ui/TextArea';
import React from 'react';

const Consultation: React.FC = () => {
    return (
    <Container className="my-20">
      <section className="flex flex-col justify-center items-center gap-5">
        <h1 className="title">FREE CONSULTATION</h1>
        <Separator />
        <p className="paragraph">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
        {/* form div  */}
        <div className="lg:h-[500px] w-full rounded-md shadow-md flex md:flex-row flex-col items-center  border mt-8">
          <div className="flex-1 md:ml-4 w-full h-full">
            <img
              className="h-full w-[500px] rounded-l-md object-cover py-4"
              src="/images/land3.jpg"
              alt="land"
            />
          </div>
          <div className="lg:px-16 px-6 w-full flex-1  py-4">
            <form className="w-full">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                <Input className="my-2" placeholder="Name" />
                <Input className="my-2" placeholder="Phone" />
                <Input className="my-2" placeholder="Email" />
                <Select className="my-2">
                  <option value="Service you're looking for fun">
                    Service your&apos;re looking for
                  </option>
                  <option value="Service you're looking for sale">
                    Service your&apos;re looking for
                  </option>
                  <option value="Service you're looking for work">
                    Service your&apos;re looking for
                  </option>
                  <option value="Service you're looking for service">
                    Service your&apos;re looking for
                  </option>
                </Select>
                <TextArea
                  className="lg:col-span-2 my-2"
                  placeholder="Message"
                />
              </div>
              <Button className="bg-blue-800 px-8 py-3 text-white rounded-md mt-14 w-fit">
                GET A QUOTES
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Consultation;
