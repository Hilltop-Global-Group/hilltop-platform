import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Mail, Phone, MapPin, Tag } from 'lucide-react';
import { KenteDivider, ArrowCTA, DecorativeUnderline, AfricaWatermark } from '@/components/shared/HilltopBrand';

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
    'wp:term'?: Array<Array<{ id: number; name: string }>>;
  };
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found - Hilltop Global Group' };
  return {
    title: `${post.title.rendered.replace(/<[^>]*>/g, '')} - Hilltop Global Group`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || 'Hilltop Team';
  const categories = post._embedded?.['wp:term']?.[0] || [];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
        {/* Background image */}
        {featuredImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: `url('${featuredImage}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />

        {/* Africa watermark */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
          <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
        </div>

        {/* Orange top stripe */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Back link */}
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {categories.map((cat: { id: number; name: string }) => (
                <span
                  key={cat.id}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] px-3 py-1"
                  style={{ backgroundColor: '#F4A261', color: '#fff' }}
                >
                  <Tag size={10} />
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="font-serif font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 font-sans text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Calendar size={14} style={{ color: '#F4A261' }} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <User size={14} style={{ color: '#F4A261' }} />
              {authorName}
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured Image ── */}
      {featuredImage && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
              <Image
                src={featuredImage}
                alt={post.title.rendered.replace(/<[^>]*>/g, '')}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/30 via-transparent to-transparent" />
            </div>
            {/* Orange corner accent */}
            <div
              className="w-12 h-12 border-l-[3px] border-b-[3px]"
              style={{ borderColor: '#F4A261', marginTop: -2, marginLeft: -2 }}
            />
          </div>
        </section>
      )}

      {/* ── Article Content ── */}
      <article className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Full Story
          </p>

          <div
            className="prose prose-lg max-w-none
              prose-p:font-sans prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-headings:font-serif prose-headings:font-bold
              prose-h2:text-[#1D3160] prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
              prose-h3:text-[#1D3160] prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-h4:text-[#1D3160] prose-h4:text-lg
              prose-ul:my-5 prose-ul:space-y-2 prose-ul:list-none prose-ul:pl-0
              prose-ol:my-5 prose-ol:pl-6
              prose-li:text-gray-600 prose-li:text-base prose-li:leading-relaxed
              prose-strong:text-[#1D3160] prose-strong:font-bold
              prose-a:text-[#F4A261] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-500 prose-blockquote:not-italic
              prose-img:shadow-lg prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-t border-gray-100" style={{ backgroundColor: '#080f1c' }}>
        <AfricaWatermark className="absolute right-0 top-0 w-64 h-auto opacity-5 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <KenteDivider className="mb-6 flex justify-center" color="#F4A261" />
          <h2
            className="font-serif font-extrabold text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Ready to Experience Africa?
          </h2>
          <p className="font-sans text-white/50 text-base mb-10 max-w-xl mx-auto">
            Explore our internship and education programs across Ghana, Rwanda, and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/internships/current"
              className="group inline-flex items-center gap-3 px-8 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border border-white/40 hover:border-white transition-colors duration-200"
            >
              View Open Internships
              <ArrowCTA />
            </Link>
            <Link
              href="/education"
              className="group inline-flex items-center gap-3 px-8 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] border transition-colors duration-200"
              style={{ borderColor: '#F4A261', color: '#F4A261' }}
            >
              Explore Education Programs
              <ArrowCTA />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Back + Contact ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <KenteDivider className="mb-6 flex justify-center" />
          <h2
            className="font-serif font-extrabold text-black leading-none mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Have Questions?
          </h2>
          <p className="font-sans text-gray-500 text-base mb-10">
            Our team is happy to help. Reach us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:+12024992284" className="inline-flex items-center gap-2 font-sans font-semibold text-sm" style={{ color: '#1D3160' }}>
              <Phone size={16} style={{ color: '#F4A261' }} /> +1 202-499-2284
            </a>
            <a href="mailto:support@hilltopglobalgroup.com" className="inline-flex items-center gap-2 font-sans font-semibold text-sm" style={{ color: '#1D3160' }}>
              <Mail size={16} style={{ color: '#F4A261' }} /> support@hilltopglobalgroup.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 font-sans text-gray-400 text-sm mb-12">
            <MapPin size={14} style={{ color: '#F4A261' }} />
            700 12th Street NW, Suite 700. Washington, DC 20005
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-gray-400 hover:text-black transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to All News
          </Link>
        </div>
      </section>

    </main>
  );
}
