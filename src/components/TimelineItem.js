import React, { Component } from 'react';
import './TimelineItem.css';

class TimelineItem extends Component {
  render() {
    const { date, question, answer } = this.props.question.attributes
    return (
      <div className="timeline-item">
        <div className="timeline-date">
          <div>
            {date}
          </div>
        </div>
        <div className="timeline-content">
          <h2>{question}</h2>
          <p>{answer}</p>
        </div>
      </div>
    );
  }
}

export default TimelineItem;
