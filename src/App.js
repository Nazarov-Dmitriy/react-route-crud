import "./App.css";
import { Routes, Route } from "react-router-dom";
import New from "./components/New";
import Main from "./components/Main";
import View from "./components/View";
import Edit from "./components/Edit";
import Postprovaider from "./provoder/Postprovaider";

function App() {
  return (
    <div className="App">
      <h1>Router Crud</h1>
      <Postprovaider>
        <Routes>
          <Route path="/" exact element={<Main  />} />
          <Route path="posts/new" element={<New />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Postprovaider>
    </div>
  );
}

export default App;
