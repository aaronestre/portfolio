import {React, useState} from "react";

export default function useNavbar() {
    
    const [isSWEDropdownOpen, setSWEDropdownOpen] = useState(false);
    const [isArtDropdownOpen, setArtDropdownOpen] = useState(false);

    const handleSWEEnter = () => setSWEDropdownOpen(true);
    const handleSWELeave = () => setSWEDropdownOpen(false);

    const handleArtEnter = () => setArtDropdownOpen(true);
    const handleArtLeave = () => setArtDropdownOpen(false);

    return {isArtDropdownOpen, isSWEDropdownOpen, handleSWEEnter, handleSWELeave, handleArtEnter, handleArtLeave};

}