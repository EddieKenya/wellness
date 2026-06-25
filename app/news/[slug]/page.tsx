// app/news/[slug]/page.tsx
// Change these two lines at the top of your file:
import { renderContentWithAds } from '../../../utils/adInjector';
import AdComponent from '../../../components/AdComponent';

// Define the shape of your params to satisfy TypeScript
type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getArticle(slug: string) {
  // Ensure your API URL matches your Django endpoint structure
  const res = await fetch(`https://wellnessbackend-hwd4.onrender.com/api/articles/${slug}/`, {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch article');
  }
  
  return res.json();
}

export default async function NewsPage({ params }: PageProps) {
  // Await params in Next.js 15+
  const { slug } = await params;
  const article = await getArticle(slug);
  
  return (
    <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
      {/* Main Content Area */}
      <article className="md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        
        {/* Next.js optimized image rendering */}
        {article.image && (
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-auto mb-6 rounded-lg" 
          />
        )}

        {/* In-feed Ad Injection logic */}
        <div className="article-body prose lg:prose-xl">
          {renderContentWithAds(article.content, AdComponent)}
        </div>
      </article>

      {/* Sidebar Ads - Sticky for high viewability */}
      <aside className="md:col-span-1">
        <div className="sticky top-4">
          <div className="ad-unit bg-gray-200 h-64 mb-6 flex items-center justify-center">
            Ad Slot 1
          </div>
          <div className="ad-unit bg-gray-200 h-64 flex items-center justify-center">
            Ad Slot 2
          </div>
        </div>
      </aside>
    </main>
  );
}