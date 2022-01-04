import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import { createBrowserHistory } from "history";
import Registered from "./components/Register";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    // <Welcome />
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Registered />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/itemDetail" element={<ItemDetail />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
