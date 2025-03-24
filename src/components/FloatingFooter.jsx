import FooterLink from "./FooterLink";


export default function FloatingFooter() {
    
    const listItem = "text-(--secondary-font-color) hover:text-white transition duration-300 cursor-pointer"


	return (
		<div className="bg-(--background-semi-dark) p-4 w-1/3 mx-auto grid grid-cols-2 mb-10 rounded-md h-auto">
			<div className="flex flex-col justify-end">
				<h1 className="text-(--primary-font-color) font-bold text-5xl">
					Aaron<br></br>
                    Estrellado. 
				</h1>
			</div>
			<div className="flex flex-row gap-6 justify-end mr-10">
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-lg sm:text-md mb-2">
						Explore
					</h1>
					<div className="flex flex-col">

						<FooterLink href="/" text="Home"/>
                        <FooterLink href="/about" text="About"/>
                        <FooterLink href="/swe" text="SWE"/>
                        <FooterLink href="/art" text="Art"/>
					</div>
				</div>
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-lg sm:text- mb-2">
						Socials
					</h1>
					<div className="flex flex-col">
						<FooterLink href="https://github.com/aaronestre" text="GitHub" type="external" />
                        <FooterLink href="https://www.linkedin.com/in/aaronestrellado/" text="LinkedIn" type="external" />

					</div>
				</div>
			</div>
		</div>
	);
}
