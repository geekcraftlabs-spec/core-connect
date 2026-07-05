"use client";
import { useState } from "react";

export default function ReviewsPage() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const reviews = [
    { name: "Thabo Nkosi", stars: 5, text: "Absolutely thrilled with my iPhone 15! The COD option made me feel secure, and the delivery to Pretoria was swift and transparent." },
    { name: "Pieter van der Merwe", stars: 5, text: "Bought a MacBook Pro, and it's premium quality as promised. Picked it up in Johannesburg – no hassle at all." },
    { name: "Lerato Mokoena", stars: 4, text: "Great experience with my iPad purchase. The team ensured everything was smooth, even with delivery outside Gauteng." },
    { name: "Bra Mike", stars: 5, text: "Loving my new AirPods! COD was a game-changer – no worries about scams. Delivered right to my door." },
    { name: "Johan Botha", stars: 5, text: "Core Connect delivered my iPhone 14 faster than expected. The quality is unmatched, and their customer service is excellent." },
    { name: "Thandi", stars: 5, text: "Super happy with the iPhone X I got. Efficient collection in Gauteng, and everything was as described." },
    { name: "Nadia Patel", stars: 4, text: "Impressed by the transparent delivery process. The MacBook is perfect – thanks, Core Connect!" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#1a3c6e] text-center mb-4">What Our Customers Say</h1>
      <p className="text-center text-[#6b6b6b] mb-12">Real reviews from real customers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-[#e8e4e0] hover:shadow-lg transition">
            <div className="text-yellow-400 text-xl mb-2">
              {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
            </div>
            <p className="text-[#4a4a4a] text-sm italic mb-3">&ldquo;{review.text}&rdquo;</p>
            <p className="font-semibold text-[#1a3c6e]">{review.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#1a3c6e] text-center mb-4">Share Your Experience</h2>
        <form
          action="https://formspree.io/f/xvgbvgwb"
          method="POST"
          target="_blank"
          className="bg-white p-6 rounded-2xl shadow-md border border-[#e8e4e0] space-y-4"
          onSubmit={() => {
            // reset rating after submit? not necessary
          }}
        >
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Name (Optional)</label>
            <input type="text" name="name" className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-2">Star Rating</label>
            <div className="flex gap-1 text-3xl">
              {[1, 2, 3, 4, 5].map((star) => {
                const isActive = (hoverRating || rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    className={`transition-colors ${isActive ? "text-yellow-400" : "text-gray-300"} hover:scale-110`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onTouchStart={() => {
                      setRating(star);
                      setHoverRating(star);
                    }}
                    aria-label={`Rate ${star} stars`}
                  >
                    ★
                  </button>
                );
              })}
            </div>
            {/* Hidden input to send rating to Formspree */}
            <input type="hidden" name="rating" value={rating} />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#4a4a4a] mb-1">Your Review</label>
            <textarea name="review" rows={4} className="w-full border border-[#e8e4e0] rounded-lg px-4 py-2 text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent" placeholder="Write your review here" required maxLength={500}></textarea>
          </div>
          <button type="submit" className="w-full bg-[#c7412d] text-white py-3 rounded-lg font-semibold hover:bg-[#a83524] transition">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}