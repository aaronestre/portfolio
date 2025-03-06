const ArtImg = ({text, ...props}) => {

    return (
        <div className="art-container group relative">
            <img className="block w-full h-auto aspect-[3/2] rounded-lg transition duration-300 ease-in-out group-hover:brightness-40" {...props} />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg md:text-xl text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">{text}</p>
        </div>
    )
}

export default ArtImg;