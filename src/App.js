function App() {
  return (
    // < !----------------header start---------------->
    <header className="header">
      <div className="logo">
        <img
          src="/logo.png"
          alt="logo"
        />
        <h1>Today's Facts 📌</h1>
      </div>

      <button id="btn__open" className="btn btn-large">Share a fact</button>
    </header>
    // <!----------------header end---------------->
  );
}

export default App;
