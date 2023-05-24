import { HashRouter, Routes, Route } from "react-router-dom";

// import elements
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Carousel from "./components/Carousel";
import ChooseUs from "./components/ChooseUs";
import Collection from "./components/Collection";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Footer from "./components/Footer";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Hero />
                                <Introduction />
                                <Carousel />
                                <ChooseUs />
                                <Collection />
                                <Gallery />
                                <Partners />
                                <Contact
                                    title="Have Questions?"
                                    desc="Send us a message"
                                />
                            </div>
                        }
                    />
                    <Route path="/about-us/" element={<About />} />
                    <Route path="/catalogue/:id" element={<Catalogue />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
