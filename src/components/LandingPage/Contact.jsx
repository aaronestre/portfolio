import Button from "../Button";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted");
    };

    return (
        <div
            className="w-2/5 mx-auto my-40 flex flex-col justify-center items-center text-center mb-8"
            id="contact"
        >
            <h1 className="text-6xl text-(--primary-font-color)">Contact</h1>
            <form
                className="mt-8 flex flex-col gap-4 justify-center items-center text-center w-full font-(--family-name:--primary-font)"
                onSubmit={handleSubmit}
            >
                <input className="w-full p-3 border-1 rounded-xl border-gray-400 border-solid text-1.5xl font-(--family-name:--secondary-font) text-(--primary-font-color) focus:outline-none" type="text" placeholder="Name" />
                <input className="w-full p-3 border-1 rounded-xl border-gray-400 border-solid text-1.5xl font-(--family-name:--secondary-font) text-(--primary-font-color) focus:outline-none" type="email" placeholder="Email" />
                <textarea className="resize-none w-full h-36 p-3 border-1 rounded-xl border-gray-400 border-solid text-1.5xl font-(--family-name:--secondary-font) text-(--primary-font-color)" placeholder="Message"></textarea>
                <Button
                    style={{ border: "2px solid #FF7043" }}
                    text={"Submit"}
                    className="swe text-(--swe-color) "
                />
            </form>
        </div>
    );
}

export default Contact;
