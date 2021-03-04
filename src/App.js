import React, { Component } from 'react';

/* Components */
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const amount = this.countTotalFeedback();
    const percentageOfPositiveFeedbacks = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {amount > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={amount}
              positivePercentage={percentageOfPositiveFeedbacks}
            />
          ) : (
            <Notification msg="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
