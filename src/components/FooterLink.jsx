
export default function FooterLink({ type="internal", text, href }) {
    
    if ( type === "external" ) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--secondary-font-color) hover:text-(--primary-font-color) transition duration-300 cursor-pointer">
                    {text}
            </a>
        )
    } else {
        return (
            <a
                href={href}
                className="text-(--secondary-font-color) hover:text-(--primary-font-color) transition duration-300 cursor-pointer">
                    {text}
            </a>
        )
    }


}