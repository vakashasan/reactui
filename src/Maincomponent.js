import React from "react";
import mygraph from "./images/graph.png";

function MainComponent() {
  return (
    <>
      <div className="Container px-5 py-5">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link d-inline-flex align-items-center">
              Call to action
              <svg className="bi" width="1em" height="1em"></svg>
            </a>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg className="bi" width="1em" height="1em"></svg>
            </div>
            <h2>Featured title</h2>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href="#" className="icon-link d-inline-flex align-items-center">
              Call to action
              <svg className="bi" width="1em" height="1em"></svg>
            </a>
          </div>
          <div className="feature col">
            
            <img src={mygraph} width="600px" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainComponent;
