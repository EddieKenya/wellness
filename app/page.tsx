import Link from "next/link";

type Article = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  image?: string;
};

async function getLatestArticles() {
  try {
    const res = await fetch("https://wellnessbackend-hwd4.onrender.com/api/articles/", {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch articles for homepage:", error);
    return [];
  }
}

export default async function HomePage() {
  const articles: Article[] = await getLatestArticles();

  const fallbackImages = [
    "/fitness-couple.jpg", 
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop", 
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      
      {/* Featured Hero Section with your Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 py-8 border-b border-zinc-100 dark:border-zinc-800">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-zinc-950 dark:text-zinc-50">
            Wellness, Fitness & Health Education
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Empowering your personal health journey with evidence-based wellness strategies, professional calisthenics guidance, and comprehensive physical training advice.
          </p>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-sm">
          <img
            src="/fitness-couple.jpg"
            alt="Healthy lifestyle and fitness training"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dynamic Content Core */}
      {articles.length === 0 ? (
        <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg">
            Our health and fitness archives are synchronizing. New articles arriving shortly!
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-8 tracking-tight text-zinc-900 dark:text-zinc-100">
            Latest Educational Briefs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const displayImage = article.image || fallbackImages[index % fallbackImages.length];

              return (
                <article 
                  key={article.id} 
                  className="group bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden"
                >
                  <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 relative">
                    <img
                      src={displayImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {article.description || "Explore detailed breakdowns covering structural execution, biological benefits, and safety optimization for your active routines."}
                    </p>
                    <Link
                      href={`/news/${article.slug}`}
                      className="inline-flex items-center font-semibold text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-150"
                    >
                      Read Analysis
                      <span className="ml-1.5 transform group-hover:translate-x-0.5 transition-transform duration-150">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}