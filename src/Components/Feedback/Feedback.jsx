function Feedback({ rewiev, reset, positive, total}) {
  return (
    <section>
      <ul>
        {Object.keys(rewiev).map((rew) => (
          <li key={rew}>
            {rew} : {rewiev[rew]}
          </li>
        ))}
          </ul>
          <ul>
              <li>Total: {total}</li>
              <li>Positive: {positive }%</li>
          </ul>
      <button onClick={reset}>reset</button>
    </section>
  );
}

export default Feedback;
