const ArtImg = ({text, ...props}) => {

    return (
        <div className="art-container group relative">
            <img className="art-image block h-80 w-120 rounded-lg transition duration-300 ease-in-out group-hover:brightness-40" {...props} />
            <p className="art-text absolute -translate-x-2/4 -translate-y-2/4 text-[white] text-xl text-center left-2/4 top-2/4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{text}</p>
        </div>
    )
}

export default ArtImg;