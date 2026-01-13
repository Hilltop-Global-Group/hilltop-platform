'use client';

import { useState } from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface WordPressPost {
  id: number;
  date: string;
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
  link: string;
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                activeCategory === null
                  ? 'text-white shadow-lg'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: activeCategory === null ? '#1D3160' : undefined,
              }}
            >
              All Posts
            </button>
            {categories
              .filter(cat => cat.count > 0 && cat.name !== 'Uncategorized')
              .map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? '#1D3160' : undefined,
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No posts found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const authorName = post._embedded?.author?.[0]?.name || 'Hilltop Team';
              const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News';

              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt={post.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: '#F4A261' }}
                      >
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{authorName}</span>
                      </div>
                    </div>

                    <h3 
                      className="font-heading font-bold text-xl mb-3 line-clamp-2" 
                      style={{ color: '#1D3160' }}
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {getExcerpt(post.excerpt.rendered)}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
                        style={{ color: '#1D3160' }}
                      >
                        Read More
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

