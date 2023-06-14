import { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import css from './Feedbacks.module.css';

const Feedbacks = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(type) {
    switch (type) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedbackTotal = countTotalFeedback();
    return feedbackTotal === 0 ? 0 : ((good / feedbackTotal) * 100).toFixed(0);
  };

  const feedbackTotal = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.containerFeedbacks}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {feedbackTotal === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={feedbackTotal}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
};

export default Feedbacks;
