import "./css/reset.css"
import "./css/main.css"
import {Navbar} from "./components/navbar/navbar";
import {Footer} from "./components/footer/footer";
import {Home} from "./pages/home";
import {Projects} from "./pages/projects";
import {Contacts} from "./pages/contacts";
import {ProjectPage} from "./pages/projectPage";
import {projects} from "./helpers/listProjects";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScrollToTop from "./components/utils/scrollToTop";
import Card from "./components/cardIMG/cardIMG";
import {Motion} from "./components/Motion";
import {Collapsible} from "./components/collapsible/collapsible";
import {Section} from "./components/section/section";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop/>
            <Navbar/>
            <Section>
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/projects' element={<Projects/>} />
                <Route path='/project/:index' element={<ProjectPage/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>
            </Section>
        </Router>

    </div>
);
}

export default App;
