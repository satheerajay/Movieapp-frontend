import "./MovieCard.css";
import { useState } from "react";

function MovieCard({ Movie }) {
  const [showPopup, setShowPopup] = useState(false);

  function onFavouriteClick() {
    setShowPopup(true);
    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  return (
    <div className="Movie-card">
      <div className="Movie-poster">
        <img src={Movie.url} alt={Movie.title} />
        <div className="Movie-overlay">
          <button className="favorite-btn" onClick={onFavouriteClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="Movie-info">
        <h2 className="Movie-title">{Movie.title}</h2>
        {/* <p className="Movie-description">{Movie.description}</p> */}
        <p className="Movie-rating">Rating: {Movie.rating}</p>
        <p className="Movie-release-date">Release Date: {Movie.releaseDate}</p>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Added to Favorites!</h3>
            <p>
              You have added <strong>{Movie.title}</strong> to your favorites!
            </p>
            <button
              className="popup-close-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
