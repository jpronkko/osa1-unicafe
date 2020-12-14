import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

const StatisticsLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text} {value}</td>
      </tr>
    </tbody>
  )
}

const Stats = ({ good, bad, neutral }) => {

  const all = (good, bad, neutral) => good + bad + neutral

  const average = (good, bad, neutral) => {
    let sum = all(good, bad, neutral)
    if (sum === 0)
      return 0

    return (good * 1 + bad * (-1) + neutral * 0) / sum
  }

  const positive = (good, bad, neutral) => {
    let sum = all(good, bad, neutral)
    if (sum === 0)
      return 0

    return 100 * good / sum
  }

  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={all(good, bad, neutral)} />
        <StatisticsLine text="average" value={average(good, bad, neutral)} />
        <StatisticsLine text="positive" value={positive(good, bad, neutral) + "%"} />
      </table>
    </div>
  )
}

const Button = ({ handleClick, title }) => {
  return (
    <button onClick={handleClick}>
      {title}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} title="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} title="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} title="Bad" />

      <Stats good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

