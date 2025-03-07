import React from "react";
import Button from "../components/Button";

export default function SWE() {
    return (
        <>
            <div
                className="top-0 left-0 h-dvh flex flex-col justify-center items-center"
                id="hero"
            >
                <div className="flex flex-col justify-center items-center text-center mx-auto my-0 px-0 py-4">
                    <h1 className="text-(--primary-font-color) text-6xl m-5">
                        Hello, I'm Aaron, a{" "}
                        <span className="text-(--swe-color)">full stack</span>{" "}
                        developer.
                    </h1>
                    <h2 className="text-(--primary-font-color) text-3xl">
                        Explore my{" "}
                        <span className="text-(--swe-color)">SWE</span>{" "}
                        portfolio
                    </h2>
                </div>
                <div className="m-4 flex justify-center items-center gap-4">
                    <Button
                        style={{ border: "2px solid #FF7043" }}
                        className="swe text-(--swe-color)"
                        text="View my Resume"
                    />
                    <Button
                        style={{ border: "2px solid #FF7043" }}
                        className="swe text-(--swe-color)"
                        text="Explore my GitHub"
                    />
                </div>
            </div>
        </>
    );
}
