import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import LandingPage from "../pages/LandingPage";
import Art from "../pages/Art";
import SWE from "../pages/SWE";
import About from "../pages/About";

export default function RouterSwitcher() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/swe" element={<SWE />} />
                <Route path="/art" element={<Art />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
