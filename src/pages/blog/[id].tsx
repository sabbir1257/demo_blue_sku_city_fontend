/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  FacebookIcon,
  LinkedinIcon,
  ShareIcon,
  TagsIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/Icons/Icons';
import CategoryList from '@/components/pages/blog/CategoryList';
import RelatedPostCard from '@/components/pages/blog/RelatedPostCard';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Separator from '@/components/ui/Separator';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  tags?: string[];
  category: string;
}

const BlogDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/datas/blog/Category.json');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();

        const foundPost = data.find((p) => String(p.id) === String(id));

        if (!foundPost) {
          setError('Blog post not found.');
          setPost(null);
        } else {
          setPost(foundPost);
        }
      } catch (err) {
        setError('Failed to load blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <section>
        <EveryPageHeroSection title="BLOG Details" />
        <Container className="my-10">
          <p>Loading blog post...</p>
        </Container>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section>
        <EveryPageHeroSection title="BLOG Details" />
        <Container className="my-10">
          <p className="text-red-600">{error || 'Blog post not found.'}</p>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <EveryPageHeroSection title="BLOG Details" />

      <Container className="my-10 flex flex-col lg:flex-row gap-10">
        {/* Sidebar first on mobile, second on desktop */}
        <div className="w-full lg:w-[40%] order-1 lg:order-2">
          <CategoryList />
        </div>

        {/* Blog content second on mobile, first on desktop */}
        <div className="w-full lg:w-[60%] order-2 lg:order-1">
          <div className="w-full max-h-[450px] h-full relative">
            <Image
              width={800}
              height={450}
              className="w-full max-h-[450px] rounded-md shadow-sm h-full object-cover"
              src={post.imageUrl}
              alt={post.title}
            />
            <div className="absolute bottom-4 left-4">
              <button className="bg-blue-900 rounded-md px-4 py-1 text-sm text-white font-medium shadow-md">
                {post.date || 'Date not available'}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="paragraph text-wrap mt-2">{post.description}</p>
          </div>

          <div className="my-5">
            <hr />
            <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
              <div className="flex items-center gap-2">
                <TagsIcon />
                <h1 className="paragraph">
                  <span className="text-black font-semibold">Tags</span>:{' '}
                  {post.tags?.join(', ') || 'No tags'}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <div className="flex items-center gap-1">
                  <ShareIcon />
                  <h1 className="text-black paragraph font-semibold">
                    Shared:
                  </h1>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FacebookIcon />
                  <TwitterIcon />
                  <LinkedinIcon />
                  <YoutubeIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="my-10">
            <h1 className="title mb-2">Related Posts</h1>
            <Separator />
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <RelatedPostCard />
              <RelatedPostCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
