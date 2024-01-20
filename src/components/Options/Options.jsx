import css from "./Options.module.css"

export const Options = ({ handleOption, totalFeedback, handleReset }) => {
  return (
    <div className={css.option_container}>
      <button onClick={()=>handleOption('good')}>Good</button>
      <button onClick={()=>handleOption('neutral')}>Neutral</button>
      <button onClick={()=>handleOption('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  )
};