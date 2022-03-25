import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar width={90}
      height={100}
      children={"Hello"}/>
    </div>
  );
}

export default App;
