'use client';
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/pages/blog/BlogCard';
import CategoryList from '@/components/pages/blog/CategoryList';
import Container from '@/components/ui/Container';
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const truncateWords = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/datas/blog/Category.json');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data: Post[] = await res.json();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const recentPosts = [...blogPosts].sort((a, b) => b.id - a.id).slice(0, 3);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <section>
        <EveryPageHeroSection title="BLOG" imageUrl="/images/landing.jpg" />
        <Container className="my-10">
          <p>Loading posts...</p>
        </Container>
      </section>
    );
  }

  return (
    <section>
      <EveryPageHeroSection title="BLOG" imageUrl="/images/landing.jpg" />

      <Container className="my-10 flex flex-col lg:flex-row gap-10">
        {/* Sidebar First on Mobile (order-1), Right on Desktop (lg:order-2) */}
        <div className="w-full lg:w-[40%] flex flex-col gap-10 order-1 lg:order-2">
          <CategoryList />

          <div className="ml-7">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">Recent Blogs</h2>
            <ul className="flex flex-col gap-4">
              {recentPosts.map((post) => (
                <li key={`recent-${post.id}`} className="flex items-center gap-3">
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-3 w-full">
                    <Image
                      width={64}
                      height={48}
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-16 h-12 object-cover rounded-md flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-md font-medium hover:text-blue-600 cursor-pointer">
                        {post.title.length > 45 ? post.title.slice(0, 42) + '...' : post.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {post.description.length > 60
                          ? post.description.slice(0, 57) + '...'
                          : post.description}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog list second on mobile (order-2), left on desktop (lg:order-1) */}
        <div className="w-full order-2 lg:order-1">
          <div className="w-full flex flex-col gap-5">
            {currentPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={truncateWords(post.description, 30)}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>

          <div className="mt-10 mb-10">
            <hr className="mb-6" />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-md border text-xl font-medium shadow-sm disabled:opacity-50"
              >
                {'<<'}
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-12 h-12 rounded-md border text-xl font-medium shadow-sm ${
                    currentPage === i + 1 ? 'bg-blue-950 text-white' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-md border text-xl font-medium shadow-sm disabled:opacity-50"
              >
                {'>>'}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
