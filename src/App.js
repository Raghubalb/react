// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Programs/>
      <Title/>
      <About/>
      <Campus/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
