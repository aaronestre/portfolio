const NavLink = ({href, text}) => {

    return (
        <div className="relative text-center" >
            <a href={href} className="block p-2 text-(--primary-font-color) no-underline hover:text-(--highlight-color)">{text}</a>
        </div>
    )
}

export default NavLink;