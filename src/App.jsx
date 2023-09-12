import React from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Details from "./Components/Details";

const App = () => {
    return (
        <div className="container mt-5 ">
            <Nav />
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route path="/profile" element={<Profile />}>
                    <Route path="/profile/:id" element={<Details />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
