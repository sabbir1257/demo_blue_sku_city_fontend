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
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  tags?: string[];
  category: string;
}

const BlogDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async (): Promise<void> => {
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
        <EveryPageHeroSection
          title="News & Events Details"
          imageUrl="/images/landing.jpg"
        />
        <Container className="my-10 text-center text-gray-600 dark:text-gray-400">
          Loading blog post...
        </Container>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section>
        <EveryPageHeroSection title="News & Events Details" />
        <Container className="my-10 text-center">
          <p className="text-red-600 text-lg font-semibold">
            {error || 'Blog post not found.'}
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16">
      <EveryPageHeroSection title="News & Events Details" />
      <Container className="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="relative w-full h-72 sm:h-96 md:h-[480px]">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 768px) 100vw,
                     800px"
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <time
              dateTime={post.date || ''}
              className="absolute bottom-5 left-5 bg-blue-700 text-white px-4 py-1 rounded-lg text-sm font-semibold shadow-lg select-none"
            >
              {post.date || 'Date not available'}
            </time>
          </div>
          {/* Content */}
          <div className="p-6 sm:p-10 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <p
              className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-wrap"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {post.description}
            </p>

            {/* Tags & Sharing */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
              {/* Tags */}
              <div className="flex items-center flex-wrap gap-2 md:gap-3">
                <TagsIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="font-semibold text-gray-800 dark:text-gray-200 mr-2">
                  Tags:
                </span>
                {post.tags && post.tags.length > 0 ? (
                  post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-600 transition"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 dark:text-gray-400">
                    No tags available
                  </span>
                )}
              </div>

              {/* Social Sharing */}
              <div className="flex items-center gap-5 md:gap-6">
                <ShareIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                <Link
                  href="https://www.facebook.com/blueskycityltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                  href='https://www.threads.com/@blueskycityltd'
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition"
                >
                  <TwitterIcon className="w-5 h-5" />
                </Link>
                <Link
                  href='https://www.linkedin.com/company/blueskycityltd'
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="hover:text-blue-700 dark:hover:text-blue-500 transition"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@BlueSkyCityLtd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Youtube"
                  className="hover:text-red-600 dark:hover:text-red-500 transition"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};
export default BlogDetailsPage;