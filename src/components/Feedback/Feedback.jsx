import { FaPercent } from "react-icons/fa";
import css from "./Feedback.module.css"

export const Feedback = ({ feedbackGood, feedbackNeutral, feedbackBad, totalFeedback }) => {
  return (
    <>
        <div>
          <p>Good: {feedbackGood}</p>
          <p>Neutral: {feedbackNeutral}</p>
          <p>Bad: {feedbackBad}</p>
          <p>Total: {totalFeedback}</p>
        <p>Positive: {Math.round(((feedbackGood + feedbackNeutral) / totalFeedback) * 100)} <FaPercent className={ css.icon}/></p>
        </div>
    </>
  )
};