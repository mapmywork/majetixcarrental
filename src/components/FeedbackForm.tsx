import { useState } from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_REVIEW_LINK = "https://g.page/r/CXgxLTI58idoEAE/review";

  const handleRating = (stars: number) => {
    setRating(stars);
    
    if (stars >= 4) {
      window.open(GOOGLE_REVIEW_LINK, '_blank');
    }
  };

  const handleInternalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Internal feedback received:", feedback);
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl w-full bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
    >
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquareQuote className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          How was your experience?
        </h2>
        <p className="text-gray-600 text-lg">
          We value your feedback. Please rate your experience with Majestix Drive.
        </p>
      </div>
      
      <div className="flex justify-center gap-3 mb-10">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleRating(star)}
            className="transition-transform hover:scale-110"
            aria-label={`Rate ${star} stars`}
          >
            <Star 
              className={`w-12 h-12 transition-colors duration-200 ${
                (hoverRating || rating) >= star 
                  ? 'fill-yellow-400 text-yellow-400' 
                  : 'text-gray-200 hover:text-yellow-200'
              }`} 
            />
          </button>
        ))}
      </div>

      {rating > 0 && rating <= 3 && !submitted && (
        <motion.form 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          onSubmit={handleInternalSubmit} 
          className="flex flex-col gap-6"
        >
          <div className="bg-orange-50 text-orange-800 p-4 rounded-2xl text-center text-sm font-medium">
            We're sorry we didn't meet your expectations. Please tell us how we can improve.
          </div>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none min-h-[120px] resize-none transition-shadow"
            placeholder="Tell us what went wrong..."
            required
          />
          <button 
            type="submit" 
            className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
          >
            Submit Feedback
          </button>
        </motion.form>
      )}

      {submitted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-50 text-green-700 p-6 rounded-2xl text-center font-medium"
        >
          Thank you for your feedback! We will work on improving our service.
        </motion.div>
      )}
      
      {rating >= 4 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-primary/5 border border-primary/10 p-6 rounded-2xl text-center"
        >
          <p className="text-primary font-bold text-lg mb-2">Awesome!</p>
          <p className="text-gray-600">Redirecting you to Google Maps to share your experience with others...</p>
        </motion.div>
      )}
    </motion.div>
  );
}
