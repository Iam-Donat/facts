import './main.css';

// < !---------------- component start ---------------->
function App() {
  return (
    // JSX fragment
    <>
      {/* Headers*/}
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

      <NewFactForm />

      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}
// <!----------------component end---------------->

function NewFactForm() {
  return <form className='fact-form'>Fact Form</form>
}
function CategoryFilter() {
  return <aside>category Filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}

export default App;
