import {motion} from "motion/react";


export default function ButtonGroup({ buttons = [], handleChangeSelection, selectedSection }) {

    return (
        <div className="flex flex-row justify-center items-center sm:w-4/5 md:w-3/5 lg:w-2/5 mx-auto mb-30">
            {buttons.map((button, index) => {

                const backgroundColor = selectedSection === button.text
                    ? selectedSection === "SWE" ? "var(--swe-color)" : "var(--art-color)"
                    : "var(--background-dark)";

                return <motion.button
                    key={index}
                    onClick={() => handleChangeSelection(button.text)}
                    initial={{backgroundColor: "var(--background-dark)"}}
                    animate={{backgroundColor: backgroundColor}}
                    className={`cursor-pointer text-xs sm:text-sm md:text-base w-2/5 h-6 sm:h-10 md:h-11 first:rounded-l-lg sm:first:rounded-l-xl last:rounded-r-lg sm:last:rounded-r-xl font-medium sm:font-semibold text-white border border-white border-solid`}
                >
                    {button.text}
                </motion.button>
            })}
        </div>
    )

}