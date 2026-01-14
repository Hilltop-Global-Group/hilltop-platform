import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

interface Post {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories: number[];
  author: number;
  featured_media: number;
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      { 
        next: { revalidate: 60 }
      }
    );
    
    if (!res.ok) {
      return null;
    }
    
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Hilltop Global Group',
    };
  }

  return {
    title: `${post.title.rendered} - Hilltop Global Group`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || 'Hilltop Team';
  const categories = post._embedded?.['wp:term']?.[0] || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
        <div className="absolute inset-0">
          {featuredImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url('${featuredImage}')` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-70" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to News</span>
            </Link>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category: any) => (
              <span
                key={category.id}
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#F4A261' }}
              >
                {category.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{authorName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImage && (
        <section className="py-0">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-96 sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl -mt-20 z-10">
              <Image
                src={featuredImage}
                alt={post.title.rendered}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary-navy prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-primary-navy prose-strong:font-bold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-accent-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6" style={{ color: '#1D3160' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Hilltop Global Group can transform your educational journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/internships"
              className="px-8 py-4 font-heading font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: '#1D3160' }}
            >
              Explore Internships
            </Link>
            <Link
              href="/education"
              className="px-8 py-4 font-heading font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg border-2"
              style={{ borderColor: '#1D3160', color: '#1D3160' }}
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Back to News */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-lg font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: '#1D3160' }}
          >
            <ArrowLeft size={20} />
            Back to All News
          </Link>
        </div>
      </section>
    </main>
  );
}

