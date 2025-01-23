import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="card-image"
        />
        <div className="card-category">UI/UX Design</div>
      </div>

      <div className="card-content">
        <h2 className="card-title">UI/UX Review Check</h2>
        <p className="card-description">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>

        <div className="card-footer">
          <button className="card-button">
            Read More
            <span className="button-icon">→</span>
          </button>
          <div className="card-meta">
            <span className="read-time">5 min read</span>
            <span className="date">March 15, 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
