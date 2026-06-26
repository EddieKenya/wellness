import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-800 to-emerald-700 text-white py-24 px-6 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Empowering Your Wellness Journey
          </h1>
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
            Your trusted digital sanctuary for evidence-based health insights, mindful living practices, and transformative wellness articles.
          </p>
        </div>
      </header>

      {/* Corporate Identity & Mission */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-center">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Who We Are</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto mb-6 leading-relaxed">
          Founded with a profound vision to democratize health literacy, our platform stands at the intersection of modern medical science and holistic lifestyle curation. We understand that navigating the vast sea of health information online can be overwhelming, confusing, and often misleading. That is why we dedicated our company to publishing meticulously researched, practical, and deeply engaging articles centered entirely on wellness and vitality.
        </p>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We operate as a dynamic digital publishing house where wellness enthusiasts, certified nutritionists, physical fitness experts, and mental health advocates come together. Every article we upload is crafted to break down complex medical jargon into actionable lifestyle adjustments, guiding you step-by-step toward a healthier, more balanced version of yourself.
        </p>
      </section>

      {/* Core Editorial Pillars */}
      <section className="bg-gray-50 py-16 px-6 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Content Pillars</h2>
            <p className="text-gray-500 text-lg">What we publish daily to fuel your body, mind, and soul.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nutritional Science</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Deep dives into whole-food nutrition, dietary guidelines, recipe creations, and the therapeutic impact of clean eating on long-term vitality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mental & Emotional</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Practical mindfulness guides, stress management strategies, sleep hygiene optimization, and cognitive wellness techniques to keep you grounded.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Physical Movement</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Expert-vetted workout regimens, functional mobility routines, calisthenics breakdowns, and cardiovascular health insights tailored for all tiers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Preventative Health</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Breaking down the latest scientific clinical studies, immunological breakthroughs, and longevity habits that guard your body against chronic illness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Excellence Section */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-emerald-50/60 border-l-4 border-emerald-500 p-8 rounded-r-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-emerald-800 mb-3">Our Uncompromising Editorial Integrity</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We believe that misinformation in the health and wellness sector isn't just frustrating—it's dangerous. Before an article is ever uploaded to our platform, it undergoes a multi-layered verification process. Our writers cross-reference peer-reviewed medical journals, consult certified health practitioners, and strictly verify facts.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you read an article on our platform, you can trust that it is backed by empirical data and written with genuine empathy for your individual wellness path.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Health?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Dive into our extensive library of expertly crafted wellness articles and start implementing life-changing habits today.
          </p>
          <Link 
            href="/news" 
            className="inline-block bg-emerald-500 text-white font-semibold px-8 py-3..5 rounded-full transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 hover:scale-[1.02]"
          >
            Explore Latest Articles
          </Link>
        </div>
      </section>
    </div>
  );
}