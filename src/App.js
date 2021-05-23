import Main from "./views/Main"
import { Router } from "@reach/router"
import Edit from "./views/Edit"


function App() {
  
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Edit path="/:_id/edit"/>
      </Router>
    </div>
  );
}

export default App;
