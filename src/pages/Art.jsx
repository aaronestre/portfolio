import React from "react";
import Button from "../components/Button";

export default function Art() {
    return (
        <>
            <div
                className="top-0 left-0 h-dvh flex flex-col justify-center items-center"
                id="hero"
            >
                <div className="flex flex-col justify-center items-center text-center mx-auto my-0 px-0 py-4">
                    <h1 className="text-(--primary-font-color) text-6xl m-5">
                        Hi, I'm Aaron, an <span className="text-(--art-color)">art</span>{" "}
                        creative.
                    </h1>
                    <h2 className="text-(--primary-font-color) text-3xl">
                        Explore my{" "}
                        <span className="text-(--art-color)">art</span>{" "}
                        portfolio.
                    </h2>
                </div>
            </div>
        </>
    );
}
