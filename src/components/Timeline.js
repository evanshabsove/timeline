import React, { Component } from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem.js'

class Timeline extends Component {

  createTimelineItems(){
    let items = []
    // Outer loop to create parent
    this.props.questions.forEach(function(question, index){
      items.push(<TimelineItem question={question}/>)
    })
    return items
  }

  render() {
    return (
      <div className="timeline">
        {this.createTimelineItems()}
      </div>
    );
  }
}

export default Timeline;
