
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Achivements from "./components/achievements/achievements";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Skills/>
        <Achivements/>
        <Contact/>
    </div>
  );
}
export default App;