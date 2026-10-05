import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  const location = useLocation();

  const p = location.state;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !review.trim()) return;

    const newReview = {
      id: Date.now(),
      rating,
      review,
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReview("");
  };

  return (
    // <div>
    //   {/* Menampilkan ID produk */}
    //   <h1 className="text-2xl font-bold">{p.name}</h1>
    //   <p className="mt-4">{p.price}</p>
    // </div>

    <div className="p-6">
      <div className="flex gap-6 items-start">
        <section className="flex-1 space-y-6">
          <div className="border border-gray-400 rounded-lg p-4">
            <h1 className="text-xl font-bold">{p.name}</h1>
            <p className="mt-2">{p.price}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3">User Reviews</h2>
            {reviews.length === 0 ? (
              <p className="text-gray-500">Belum ada review.</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((r) => (
                  <div
                    key={r.id}
                    className="border border-gray-400 rounded-lg p-4 bg-white"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(r.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                      {[...Array(5 - r.rating)].map((_, i) => (
                        <span key={i} className="text-gray-300 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-800">{r.review}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="w-80 border border-gray-400 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-3">Reviews</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold mb-1">Rating:</label>
              <div className="flex gap-1 text-2xl mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Review:</label>

              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full border border-gray-400 rounded-lg p-3 text-sm focus:outline-none"
                rows="4"
                placeholder="Tulis pengalaman Anda..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-[#FFE000] hover:bg-[#FFE000] text-white rounded-lg font-medium"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
