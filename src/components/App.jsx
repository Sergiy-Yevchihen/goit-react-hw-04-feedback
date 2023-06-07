// import React, { useState } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout/Layout';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// const App = () => {
//   const [feedback, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   });

//   const leaveFeedback = option => {
//     setFeedback(prevFeedback => ({
//       ...prevFeedback,
//       [option]: prevFeedback[option] + 1,
//     }));
//   };

//   const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

//   const countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
//     Math.round((good * 100) / countTotalFeedback(feedback));

//   const { good, neutral, bad } = feedback;

//   return (
//     <Layout>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={Object.keys(feedback)}
//           onLeaveFeedback={leaveFeedback}
//         />
//       </Section>
//       <Section title="Statistics">
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={countTotalFeedback(feedback)}
//           positivePercentage={countPositiveFeedbackPercentage(feedback)}
//         ></Statistics>
        
//       </Section>
      
//       <GlobalStyle />
//     </Layout>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

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
  const totalFeedback = countTotalFeedback(feedback);
  const positivePercentage = countPositiveFeedbackPercentage(feedback);

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification msg="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};

export default App;

