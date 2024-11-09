function Option({ rewiev, handelOnClick }) {

  return (
    <>
      {Object.keys(rewiev).map((rew) => (
        <button key={rew} onClick={() => handelOnClick(rew)}>
          {rew}
        </button>
      ))}
    </>
  );
}

export default Option;
