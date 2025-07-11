import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Process from './pages/Process';
// import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from "./pages/AboutUs.jsx";

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        {/*<Route path="/the-process" element={<Process />} />*/}
                        {/*<Route path="/contact" element={<Contact />} />*/}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}