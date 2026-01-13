import NewsHero from '@/components/news/NewsHero';
import NewsGrid from '@/components/news/NewsGrid';
import NewsletterSignup from '@/components/news/NewsletterSignup';

export const metadata = {
  title: 'News & Updates - Hilltop Global Group',
  description: 'Latest news, updates, and stories from Hilltop Global Group',
};

async function getPosts() {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts?_embed&per_page=12&orderby=date&order=desc`;
    console.log('Fetching posts from:', apiUrl);
    
    const res = await fetch(apiUrl, { 
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    
    if (!res.ok) {
      console.error('Failed to fetch posts. Status:', res.status);
      throw new Error('Failed to fetch posts');
    }
    
    const posts = await res.json();
    console.log('Fetched posts count:', posts.length);
    console.log('First post:', posts[0]?.title?.rendered);
    
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

async function getCategories() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/categories?per_page=20`,
      { 
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );
    
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}

export default async function NewsPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ]);

  return (
    <main>
      <NewsHero />
      <NewsGrid posts={posts} categories={categories} />
      <NewsletterSignup />
    </main>
  );
}

