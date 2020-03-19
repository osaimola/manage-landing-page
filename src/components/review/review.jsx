import React from "react";
import "./review.css";
import dp from "../../images/avatar-ali.png";

function Review(props) {
  return (
    <React.Fragment>
      <div className="review">
        <div className="review-image">
          <img alt="" src={dp} />
        </div>
        <div className="review-content">
          <h3>Ali Garner</h3>
          <p>
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Review;
