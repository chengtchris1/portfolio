import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className='w-screen font-sans'>
      <div className='fixed w-full top-0 left-0'>
        <Navbar />
      </div>
      <Hero />
    </div>
  );
}
export default App;
