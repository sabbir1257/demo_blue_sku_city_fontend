/* eslint-disable @next/next/no-img-element */

import { FacebookIcon, TwitterIcon, YoutubeIcon } from "@/components/Icons/Icons";

interface TeamsCardProps {
  imageUrl?: string;
}

const TeamsCard: React.FC<TeamsCardProps> = ({ imageUrl = "/images/land.jpg" }) => {
  return (
    <div className="border rounded-md hover:shadow-md transition-all duration-200 group">
      <div className="w-full relative h-[283px]">
       <img
          className="w-full h-full rounded-t-md object-cover"
          src={imageUrl}
          alt="Team member"
        />

        {/* Overflow text section */}
        <div className="absolute top-0 w-full h-full rounded-t-md bg-[#321e81b0] hidden group-hover:block">
          <div className="text-white flex justify-center flex-col items-center h-full px-3">
            <div className="flex gap-2 items-center mb-3">
              <div className="size-10 rounded-full border border-white flex justify-center items-center text-xl">
                <FacebookIcon />
              </div>
              <div className="size-10 rounded-full border border-white flex justify-center items-center text-xl">
                <TwitterIcon />
              </div>
              <div className="size-10 rounded-full border border-white flex justify-center items-center text-xl">
                <YoutubeIcon />
              </div>
            </div>
            <p className="text-center">The government they survive as soldiers of fortune.</p>
          </div>
        </div>
      </div>

      <div className="text-center my-3">
        <h1 className="font-medium">Mahafuzur Rahaman</h1>
        <p className="text-sm">Software Developer</p>
      </div>
    </div>
  );
};

export default TeamsCard;
