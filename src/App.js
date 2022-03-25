import CreateModal from "./Components/CreateModal";
import MainBody from "./Components/CreateModal";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar width={90}/>
      <CreateModal/>
    </div>

  );
}

export default App;
