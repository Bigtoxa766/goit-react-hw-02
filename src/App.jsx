import { useState } from 'react'
import './App.css'
// import { Decription } from './components/Description';
// import { Options } from './components/Options';
// import { Feedback } from './components/Feedback';

const Options = ({ handleGood, handleNeutral, handleBad }) => {
  return (
    <>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      
    </>
  )
};

const Feedback = ({ feedbackGood, feedbackNeutral, feedbackBad, totalFeedback }) => {
  return (
    <>
      {totalFeedback > 0 ? (
        <div>
          <p>Good: {feedbackGood}</p>
          <p>Neutral: {feedbackNeutral}</p>
          <p>Bad: {feedbackBad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: { Math.round(((feedbackGood + feedbackNeutral) / totalFeedback) * 100)}%</p>
        </div>
      ) : <Notification/>}
    </>
  )
};

const Notification = () => {
  return(<p>No feedback yet</p>)
}
    
const App = () => {
  const [values, setValues] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  });
  
  // const updateGood = () => {
  //   setValues({
  //     ...values,
  //     good: values.good + 1
  //   })
  // }

  //  const updateNeutral = () => {
  //   setValues({
  //     ...values,
  //     neutral: values.neutral + 1
  //   })
  //  }
  
  //  const updateBad = () => {
  //   setValues({
  //     ...values,
  //     bad: values.bad + 1
  //   })
  //  }

   const onLeaveFeedback = (option) => {
	setValues({
		...values,
		[option]: values[option] + 1
	});
};
  
  return (
    
    <>
      <Options
        handleGood={()=> onLeaveFeedback('good')}
        handleNeutral={()=> onLeaveFeedback('neutral')}
        handleBad={()=> onLeaveFeedback('bad')}
      />
    
      <Feedback
        feedbackGood={values.good}
        feedbackNeutral={values.neutral}
        feedbackBad={values.bad}
        totalFeedback={values.good + values.neutral + values.bad}
      />
      
    </>
  
)
  
  
};

export default App
