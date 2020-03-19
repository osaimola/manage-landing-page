import React from "react";
import "./content.css";

function Content() {
  return (
    <React.Fragment>
      <div className="content">
        <div className="content-main">
          <h2>What's different about Manage?</h2>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="content-points">
          <div className="point">
            <div className="point-head">
              <span>01</span>
              <strong>Track company-wide progress</strong>
            </div>
            <p>
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>

          <div className="point">
            <div className="point-head">
              <span>02</span> <strong>Advanced built-in reports</strong>
            </div>
            <p>
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>

          <div className="point">
            <div className="point-head">
              <span>03</span>
              <strong>Everything you need in one place</strong>
            </div>
            <p>
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
