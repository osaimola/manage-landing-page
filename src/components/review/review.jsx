import React from "react";
import "./review.css";
import dp from "../../images/avatar-ali.png";
import arrow_right from "../../images/arrow-right.svg";
import arrow_left from "../../images/arrow-left.svg";

function Review(props) {
  return (
    <React.Fragment>
      <div className="h-scroll">
        <div className="review show">
          <div className="review-image">
            <img alt="" src={dp} />
          </div>
          <div className="review-content">
            <div className="review-title">
              <img src={arrow_left} className="review-title-button left" />
              <h3>Ali Garner</h3>
              <img src={arrow_right} className="review-title-button right" />
            </div>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>

        <div className="review">
          <div className="review-image">
            <img alt="" src={dp} />
          </div>
          <div className="review-content">
            <h3>Ali Garner</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>

        <div className="review">
          <div className="review-image">
            <img alt="" src={dp} />
          </div>
          <div className="review-content">
            <h3>Ali Garner</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>

        <div className="review">
          <div className="review-image">
            <img alt="" src={dp} />
          </div>
          <div className="review-content">
            <h3>Ali Garner</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>

        <div className="review">
          <div className="review-image">
            <img alt="" src={dp} />
          </div>
          <div className="review-content">
            <h3>Ali Garner</h3>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Review;
