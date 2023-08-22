import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
// import { Input } from "@material-ui/core";
import BasicRating from "./pages/Input";

function App() {
  return (
    <>
      <Create />
      <Notes />
      <BasicRating />
    </>
  );
}

export default App;
