import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Option from "./Components/Option/Option";
import Feedback from "./Components/Feedback/Feedback";

function App() {
  const myRew = window.localStorage.getItem("my");

  const [rewiev, setRewiev] = useState(() => {
    if (myRew !== null) {
      return JSON.parse(myRew);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  const totalFeedback = rewiev.good + rewiev.neutral + rewiev.bad;
  const positiveRew = Math.round((rewiev.good / totalFeedback) * 100);

  useEffect(
    () => window.localStorage.setItem("my", JSON.stringify(rewiev)),
    [rewiev]
  );

  function handelOnClick(value) {
    setRewiev({ ...rewiev, [value]: rewiev[value] + 1 });
  }

  function hendleReset() {
    setRewiev({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <Description />
      <Option rewiev={rewiev} handelOnClick={handelOnClick} />
      {totalFeedback === 0 ? (
        <p>No Feedback yet</p>
      ) : (
        <Feedback
          rewiev={rewiev}
          reset={hendleReset}
          positive={positiveRew}
          total={totalFeedback}
        />
      )}
    </>
  );
}

export default App;
