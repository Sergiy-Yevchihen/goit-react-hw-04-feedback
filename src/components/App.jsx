import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  const countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good * 100) / countTotalFeedback(feedback));

  const { good, neutral, bad } = feedback;

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(feedback)}
          positivePercentage={countPositiveFeedbackPercentage(feedback)}
        ></Statistics>
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
