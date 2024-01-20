import { useState, useEffect } from 'react'
import './App.css'
import { Options } from './components/Options/Options';
import { Feedback } from './components/Feedback/Feedback';
import { Decription } from './components/Description/Description';
import { Notification } from './components/Notification/Notification';

    
const App = () => {

  const initialValues = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  const [values, setValues] = useState(() => { 

    const savedObject = window.localStorage.getItem("saved-values");
    if (savedObject !== null) {
      return JSON.parse(savedObject)
    }

    return initialValues
  });

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values))
  }, [values]);

const total = values.good + values.neutral + values.bad;

const onLeaveFeedback = (option) => {
	setValues({
		...values,
		[option]: values[option] + 1
	});
};
  
  const handleReset = () => {
  
    window.localStorage.removeItem("saved-values")
    setValues(initialValues)
  };
  
  return (
    <>
      <Decription />
      
      <Options
        handleOption={onLeaveFeedback}
        handleReset={handleReset}
        totalFeedback={total}
      />
    
      {total > 0 ? <Feedback
        feedbackGood={values.good}
        feedbackNeutral={values.neutral}
        feedbackBad={values.bad}
        totalFeedback={total}
      /> : <Notification/>}
    </>
)
};

export default App
