import React, { useState } from "react";
import "./review.css";
import avatar_ali from "../../images/avatar-ali.png";
import avatar_anisha from "../../images/avatar-anisha.png";
import avatar_richard from "../../images/avatar-richard.png";
import avatar_shanai from "../../images/avatar-shanai.png";
import arrow_right from "../../images/arrow-right.svg";
import arrow_left from "../../images/arrow-left.svg";

const reviews = [
  {
    photo: avatar_ali,
    name: "Ali Bravo",
    review:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
  },

  {
    photo: avatar_anisha,
    name: "Anisha Li",
    review:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
  },

  {
    photo: avatar_richard,
    name: "Richard Watts",
    review:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
  },
  {
    photo: avatar_shanai,
    name: "Shanai Gough",
    review:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
  }
];

function renderReviews(reviewsList, hookValue, setHook) {
  return reviewsList.map((review, reviewIndex) => {
    return (
      <div
        key={reviewIndex}
        className={reviewIndex === hookValue ? "review show" : "review"}
      >
        <div className="review-image">
          <img alt="prev" src={review.photo} />
        </div>
        <div className="review-content">
          <div className="review-title">
            <img
              alt=""
              src={arrow_left}
              className="review-title-button left"
              onClick={() => handleArrowClick(-1, hookValue, setHook)}
            />
            <h3>{review.name}</h3>
            <img
              alt="next"
              src={arrow_right}
              className="review-title-button right"
              onClick={() => handleArrowClick(1, hookValue, setHook)}
            />
          </div>
          <p>{review.review}</p>
        </div>
      </div>
    );
  });
}

function renderSliderPosition(hookValue) {
  // display the current position of the slider on mobile
  const sliderLength = reviews.length - 1;
  const x = [];
  for (let i = 0; i <= sliderLength; i++) {
    x.push(<span className={i === hookValue ? "active-span" : ""}></span>);
  }
  return x;
}

function handleArrowClick(action, hookValue, setHook) {
  // cycle through reviews on arrow click
  const reviewIndexMax = reviews.length - 1;
  switch (hookValue) {
    case 0:
      action < 0 ? setHook(reviewIndexMax) : setHook(hookValue + action);
      break;
    case reviewIndexMax:
      action > 0 ? setHook(0) : setHook(hookValue + action);
      break;
    default:
      setHook(hookValue + action);
  }
}

function Review() {
  const [currentReview, setCurrentReview] = useState(0);

  return (
    <React.Fragment>
      <div className="review-head">
        <h2>What they've said</h2>
      </div>
      <div className="h-scroll">
        {renderReviews(reviews, currentReview, setCurrentReview)}
      </div>
      <div className="slider-position">
        {renderSliderPosition(currentReview)}
      </div>
      <div className="review-cta">
        <button>Get Started</button>
      </div>
    </React.Fragment>
  );
}

export default Review;
