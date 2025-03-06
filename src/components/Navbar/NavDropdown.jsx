import DropdownMenu from "./DropdownMenu";
import useDropdown from "../../hooks/useDropdown";

const NavDropdown = ({ links, text }) => {

    const {
        isDropdownOpen,
        setIsDropdownOpen,
        handleMouseEnter,
        handleMouseLeave
    } = useDropdown();

    return (
        <div
            className="relative text-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="p-2 text-(--primary-font-color)">{text}</button>
            {isDropdownOpen && (
                <DropdownMenu
                    className="dropdown-menu"
                    links={links}
                />
            )}
        </div>
    );
};

export default NavDropdown;
