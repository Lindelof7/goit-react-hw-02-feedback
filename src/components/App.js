import { Statistics } from "./Feedbacks/Statistics";
import { FeedbackOptions } from "./Feedbacks/FeedbackOptions";
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Section } from "./Feedbacks/Section";
import { Notification } from './Feedbacks/Notification'
import css from './Feedbacks/Feedback.module.css'

export class App extends Component {
  static defaultPropTypes = {
    Good: PropTypes.number.isRequired,
    Neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
  };

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state
    return Good + Neutral + Bad
  }

  countPositiveFeedbackPercentage = () => {
    const { Good, Neutral, Bad } = this.state
    return Math.floor((Good / (Good + Neutral + Bad)) * 100)
  }

  render() {
    const { Good, Neutral, Bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={(css.appWrap)}>
        <Section title='Please leave feedback' />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Section title='Statistics' />
        {total === 0 ? (<Notification message='There is no feedback' />) : (< Statistics
          good={Good}
          neutral={Neutral}
          bad={Bad}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage()}
        />)}
      </div>
    );
  }
};  
