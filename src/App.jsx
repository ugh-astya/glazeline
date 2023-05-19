import Collection from "./components/Collection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Partners from "./components/Partners";
import Catalogue from "./components/Catalogue";
import Introduction from "./components/Introduction";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <Hero />
                                <Introduction />
                                <Collection />
                                <Gallery />
                                <Partners />
                                <Contact /> 
                            </>
                        }
                    />
                    <Route path="/about-us/" element={<Collection />} />
                    <Route path="/catalogue/" element={<Catalogue />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
