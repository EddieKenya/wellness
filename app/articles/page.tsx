import Link from 'next/link';

// Automatically swap between your local Django server and your live Render API
const DJANGO_API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://your-django-app.onrender.com' // Replace with your actual Render backend URL
  : 'http://127.0.0.1:8000';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  created_at: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${DJANGO_API_BASE}/api/articles/`, {
      cache: 'no-store', // Ensures fresh data when you upload new articles in Django
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    return res.json();
  } catch (error) {
    console.error('Error loading articles from Django:', error);
    // Fallback array for local testing if the Django server is temporarily offline
    return [
      {
        id: 1,
        title: 'How to Choose the Best Personal Lubricant: A Guide',
        slug: 'how-to-choose-the-best-personal-lubricant-a-guide',
        excerpt: 'Navigating intimacy products can be overwhelming. Discover the essential scientific factors, ingredients to avoid, and how to choose the perfect formula for your wellness path.',
        category: 'Sexual Wellness',
        created_at: '2026-06-26',
      }
    ];
  }
}

export default async function BrowseArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Page Header Area */}
      <section className="bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            Our Library
          </span >
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 mt-3 mb-4 tracking-tight">
            Browse Wellness Articles
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Explore our curated selection of expert-vetted wellness, health, and holistic lifestyle resources.
          </p>
        </div>
      </section>

      {/* Articles Container */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        {articles.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <p className="text-slate-500">No articles have been uploaded yet. Check back soon!</p>
          </div>
        ) : (
          /* Grid Layout: Responsive columns that naturally go next to or below each other */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                {/* Decorative Category Ribbon */}
                <div className="p-6 pb-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
                    {article.category || 'Wellness'}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Footer metadata Link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-400 font-medium">
                      {new Date(article.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <Link 
                      href={`/news/${article.slug}`}
                      className="text-sm font-semibold text-teal-700 group-hover:text-teal-800 flex items-center gap-1 transition-all"
                    >
                      Read Article 
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}