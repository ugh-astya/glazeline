import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Partners from "./components/Partners";
import Catalogue from "./components/Catalogue";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-[73px] md:mt-[145px]">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Gallery />
                                <Partners />
                                <Contact />
                            </>
                        }
                    />
                    <Route path="/about-us/" element={<About />} />
                    <Route path="/catalogue/" element={<Catalogue />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
