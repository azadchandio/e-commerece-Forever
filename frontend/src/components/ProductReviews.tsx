import { useState } from 'react';

interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  productId: string;
  productName: string;
}

const ProductReviews = ({ productId, productName }: ProductReviewsProps) => {
  // Mock initial reviews - in real app, fetch from API
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      productId: productId,
      userName: 'John D.',
      rating: 5,
      comment: 'Amazing product! Great quality and fast shipping. Highly recommend!',
      date: '2024-08-15'
    },
    {
      id: '2',
      productId: productId,
      userName: 'Sarah M.',
      rating: 4,
      comment: 'Good value for money. The size fits perfectly as described.',
      date: '2024-08-10'
    },
    {
      id: '3',
      productId: productId,
      userName: 'Mike R.',
      rating: 5,
      comment: 'Excellent quality and exactly what I was looking for. Will buy again!',
      date: '2024-08-05'
    }
  ]);

  // Form state
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({
    userName: '',
    rating: 0,
    comment: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);

  // Handle form submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newReview.userName && newReview.rating > 0 && newReview.comment) {
      const review: Review = {
        id: Date.now().toString(),
        productId: productId,
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0]
      };
      
      setReviews(prev => [review, ...prev]);
      setNewReview({ userName: '', rating: 0, comment: '' });
      setIsWritingReview(false);
    }
  };

  // Calculate average rating
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0';

  // Render stars
  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void, onStarHover?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`text-lg ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''} ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => interactive && onStarClick && onStarClick(star)}
            onMouseEnter={() => interactive && onStarHover && onStarHover(star)}
            onMouseLeave={() => interactive && onStarHover && onStarHover(0)}
            disabled={!interactive}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Reviews Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          <button
            onClick={() => setIsWritingReview(!isWritingReview)}
            className="bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors"
          >
            {isWritingReview ? 'Cancel' : 'Write a Review'}
          </button>
        </div>
        
        {/* Rating Summary */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            {renderStars(parseFloat(averageRating))}
            <span className="text-lg font-medium">{averageRating}</span>
            <span className="text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
      </div>

      {/* Write Review Form */}
      {isWritingReview && (
        <div className="border border-gray-300 rounded-lg p-6 mb-6 bg-gray-50">
          <h4 className="text-md font-medium mb-4">Write a review for {productName}</h4>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={newReview.userName}
                onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              {renderStars(
                hoveredRating || newReview.rating, 
                true,
                (rating) => setNewReview(prev => ({ ...prev, rating })),
                setHoveredRating
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-vertical"
                placeholder="Share your experience with this product..."
                required
              />
            </div>
            
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-sm font-medium transition-colors"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setIsWritingReview(false)}
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {renderStars(review.rating)}
                    <span className="font-medium text-gray-900">{review.userName}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductReviews;