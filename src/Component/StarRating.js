import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, reviews, color = "gold" }) => {
  const safeRating = Math.min(Math.max(parseFloat(rating), 0), 5); // 0 to 5 range

  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.25 && safeRating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="p-4 border rounded shadow-sm text-center">
      <h2 className="mb-2 text-dark">{safeRating.toFixed(2)}/5</h2>

      <div className="mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} color={color} size={22} />
        ))}
        {hasHalfStar && <FaStarHalfAlt key="half" color={color} size={22} />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} color={color} size={22} />
        ))}
      </div>

      <p className="mb-0">
        From <strong>{reviews}</strong> Reviews
      </p>
    </div>
  );
};

export default StarRating;
