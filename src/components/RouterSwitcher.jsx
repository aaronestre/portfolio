import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import LandingPage from "../pages/LandingPage";
import SWE from "../pages/SWE";

export default function RouterSwitcher() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/swe" element={<SWE />} />
            </Routes>
        </Router>
    );
}
