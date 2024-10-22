const App = () => {
  return (
    <>
      <div className="container">
        <ul>
          {[3, 6, 5, 2].map((_, idx) => (
            <li key={idx}>{_}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
