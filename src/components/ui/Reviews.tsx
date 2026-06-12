'use client';

import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Misha Patel',
      rating: 5,
      date: 'June 2, 2026',
      title: 'Absolutely gorgeous fit!',
      comment: 'Specially designed for festive moments. The fabric of my Kurta Set is premium soft and breathable, and the gota patti work is extremely neat. Fitting is just perfect.',
      verified: true
    },
    {
      name: 'Neha Sharma',
      rating: 5,
      date: 'May 28, 2026',
      title: 'Stunning Anarkali flare',
      comment: 'I ordered the Mint Georgette Anarkali for my cousin s sangeet. The 4-meter flare is spectacular! Got so many compliments. Highly recommend Parizaad!',
      verified: true
    },
    {
      name: 'Priyanka Sen',
      rating: 5,
      date: 'May 14, 2026',
      title: 'Premium Chikankari quality',
      comment: 'Lovely ivory white straight tunic! The hand embroidery is beautiful and doesn t shrink after washing. Perfect everyday-chic ethnic look.',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-burgundy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-burgundy">
            Ratings & Reviews
          </h2>
          <p className="text-xs sm:text-sm tracking-widest text-foreground/50 uppercase max-w-lg mx-auto">
            What our lovely patrons say about our creations
          </p>
          <div className="w-12 h-[1px] bg-burgundy/20 mx-auto mt-2" />
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-[#FCFBF7] p-6 rounded-2xl border border-burgundy/5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Stars and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] text-foreground/40 font-semibold uppercase">{rev.date}</span>
                </div>

                {/* Review Content */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-sm font-bold text-burgundy">
                    &ldquo;{rev.title}&rdquo;
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed italic">
                    {rev.comment}
                  </p>
                </div>
              </div>

              {/* Reviewer Meta */}
              <div className="border-t border-burgundy/5 pt-4 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-foreground block">{rev.name}</span>
                  {rev.verified && (
                    <span className="text-[9px] text-emerald-700 font-bold uppercase tracking-wider flex items-center mt-0.5">
                      ✓ Verified Buyer
                    </span>
                  )}
                </div>
                {/* Decorative initials monogram icon */}
                <div className="w-8 h-8 rounded-full bg-burgundy/5 flex items-center justify-center text-burgundy font-serif font-bold text-xs">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
