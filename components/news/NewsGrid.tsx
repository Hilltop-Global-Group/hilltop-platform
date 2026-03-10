'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { KenteDivider } from '../shared/HilltopBrand';

interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  categories: number[];
  author: number;
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

interface Category {
  id: number;
  name: string;
  count: number;
}

interface NewsGridProps {
  posts: WordPressPost[];
  categories: Category[];
}

export default function NewsGrid({ posts, categories }: NewsGridProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter(post => post.categories.includes(activeCategory))
    : posts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  const getExcerpt = (excerpt: string) => {
    const stripped = stripHtml(excerpt);
    return stripped.length > 150 ? stripped.substring(0, 150) + '...' : stripped;
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              From the Field
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Latest News
            </h2>
          </div>

          {/* Category Filter — minimal text tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button
              onClick={() => setActiveCategory(null)}
              className="font-sans text-sm font-medium pb-1 transition-colors duration-200"
              style={{
                color: activeCategory === null ? '#1D3160' : '#9CA3AF',
                borderBottom: activeCategory === null ? '2px solid #F4A261' : '2px solid transparent',
              }}
            >
              All
            </button>
            {categories
              .filter(cat => cat.count > 0 && cat.name !== 'Uncategorized')
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="font-sans text-sm font-medium pb-1 transition-colors duration-200"
                  style={{
                    color: activeCategory === category.id ? '#1D3160' : '#9CA3AF',
                    borderBottom: activeCategory === category.id ? '2px solid #F4A261' : '2px solid transparent',
                  }}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-20">
            <p className="font-sans text-gray-400 text-sm">No posts found. Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const authorName = post._embedded?.author?.[0]?.name || 'Hilltop Team';
              const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News';

              return (
                <motion.article
                  key={post.id}
                  className="group flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07, duration: 0.5 }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-100 mb-5 flex-shrink-0">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="font-sans text-xs font-bold uppercase tracking-[0.15em]"
                      style={{ color: '#F4A261' }}
                    >
                      {categoryName}
                    </span>
                    <span className="font-sans text-xs text-gray-400">{formatDate(post.date)}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif font-bold text-xl mb-3 line-clamp-2 leading-snug flex-1"
                    style={{ color: '#1D3160' }}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  {/* Excerpt */}
                  <p className="font-sans text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {getExcerpt(post.excerpt.rendered)}
                  </p>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={`/news/${post.slug}`}
                      className="group/link inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-opacity duration-200 hover:opacity-60"
                      style={{ color: '#1D3160' }}
                    >
                      Read Article
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-1">
                        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

