'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const NewsEvents = () => {
  const [newsPosts, setNewsPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // increased per page for grid

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/datas/blog/Category.json');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();
        setNewsPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(newsPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section>
        <EveryPageHeroSection title="News & Events" imageUrl="/images/landing.jpg" />
        <Container className="my-10 text-center text-gray-600 dark:text-gray-400">
          Loading posts...
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-20">
      <EveryPageHeroSection title="News & Events" imageUrl="/images/landing.jpg" />

      <Container className="my-12">
        {/* Grid of news cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-48 lg:h-56">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {truncateText(post.title, 80)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow line-clamp-4">
                  {truncateText(post.description, 140)}
                </p>
                <Link href={`/newsEvents/${post.id}`} className="mt-4 inline-block self-start">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Read More →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <nav
          aria-label="Pagination"
          className="flex justify-center items-center gap-3 mt-16 flex-wrap"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 font-medium transition ${
                currentPage === i + 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-current={currentPage === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </nav>
      </Container>
    </section>
  );
};

export default NewsEvents;
