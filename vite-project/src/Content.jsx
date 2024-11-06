import React from 'react';

const Content = () => {
  return (
    <div className="content">
      <ul className="list">
        <h2>Today's tasks :</h2>
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="first" />
          <label htmlFor="first" className="check-label">
            <span className="check-label-text">One Blog Post</span>
            <span className="check-label-box"></span>
          </label>
        </li>
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="second" />
          <label htmlFor="second" className="check-label">
            <span className="check-label-text">One Youtube Video</span>
            <span className="check-label-box"></span>
          </label>
        </li>
        <li className="list-item">
          <input type="checkbox" className="hidden-box" id="third" />
          <label htmlFor="third" className="check-label">
            <span className="check-label-text">One Youtube Shorts</span>
            <span className="check-label-box"></span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Content;
