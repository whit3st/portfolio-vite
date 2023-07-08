import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
function App() {
    return (
        <AnimatePresence mode="wait">
            <div className="max-w-[1000px] mx-auto sm:px-10 px-5 font-jost text-[#323757]">
                
                <BrowserRouter>
                <ScrollToTop />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </AnimatePresence>
    );
}

export default App;
