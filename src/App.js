import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Projects = lazy(() => import("./components/pages/Projects"));
const Contact = lazy(() => import("./components/pages/Contact"));

export default function App() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div><h1>Loadinng...</h1></div>}>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/projects" element={<Projects />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    );
}