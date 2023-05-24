import Collection from "./components/Collection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { HashRouter, Routes, Route } from "react-router-dom";
import Partners from "./components/Partners";
import Catalogue from "./components/Catalogue";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Carousel from "./components/Carousel";
import ChooseUs from "./components/ChooseUs";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route
                        exact
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
                    <Route exact path="/about-us/" element={<About />} />
                    <Route path="/catalogue/:id" element={<Catalogue />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
