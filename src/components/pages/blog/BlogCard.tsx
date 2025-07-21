/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BlogCardProps = {
  id: string | number;
  title: string;
  description?: string;
  imageUrl: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div>
      <Image
        width={500}
        height={300}
        className="w-full max-h-[450px] h-full rounded-md shadow-sm"
        src={imageUrl}
        alt="Blog image"
      />
      <div className="my-3 flex flex-col gap-2 items-start">
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="paragraph">{description}</p>
        <Link href={`/blog/${id}`}>
          <button className="text-blue-800 hover:underline mt-2 font-medium">
            READ MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
