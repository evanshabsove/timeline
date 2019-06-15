import React, { Component } from 'react';
import './Timeline.css';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
      	<div className="timeline-item">
      		<div className="timeline-date">
      			<div>
      				January 2019
      			</div>
      		</div>
      		<div className="timeline-content">
      			<h2>Kick-start</h2>
      			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?</p>
      		</div>
      	</div>

      	<div className="timeline-item">
      		<div className="timeline-date">
      			<div>
      				February 2019
      			</div>
      		</div>
      		<div className="timeline-content">
      			<h2>Lots of learning!</h2>
      			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?</p>
      		</div>
      	</div>

      	<div className="timeline-item">
      		<div className="timeline-date">
      			<div>
      				March 2019
      			</div>
      		</div>
      		<div className="timeline-content">
      			<h2>Sign-off</h2>
      			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?</p>
      		</div>
      	</div>
      </div>
    );
  }
}

export default Timeline;
