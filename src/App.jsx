import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Process from './pages/Process';
// import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/*<Route path="/about-us" element={<About />} />*/}
                        {/*<Route path="/the-process" element={<Process />} />*/}
                        {/*<Route path="/contact" element={<Contact />} />*/}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}