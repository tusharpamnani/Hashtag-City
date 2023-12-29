
import styles from "./App.module.css"
import "./root.css"
import Projects from "./Pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {

  return (
      <div className={styles.App}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} index />
            <Route path="/projects" element = {<Projects/>}/>
            <Route path="/contact" element = {<ContactUsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
