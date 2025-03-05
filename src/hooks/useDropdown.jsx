import { React, useState } from "react";

export default function useDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);

    return {
        isDropdownOpen,
        setIsDropdownOpen,
        handleMouseEnter,
        handleMouseLeave
    };
}
