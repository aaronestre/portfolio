import FooterLink from "./FooterLink";
import { navigationLinks, socialLinks } from "../util/footerLinksData";

export default function FloatingFooter() {

	return (
		<div className="bg-(--background-semi-dark) p-4 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] mx-auto grid grid-cols-2 mb-10 rounded-md h-auto">
			<div className="flex flex-col justify-end">
				<h1 className="text-(--primary-font-color) font-bold text-2xl md:text-5xl">
					Aaron<br/>
                    Estrellado. 
				</h1>
			</div>
			<div className="flex flex-row gap-6 justify-end mr-0 md:mr-10">
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-sm md:text-md mb-2">
						Explore
					</h1>
					<div className="flex flex-col">
						{navigationLinks.map((link, index) => (
							<FooterLink key={index} href={link.href} text={link.text} type={link.type} />
						))}
					</div>
				</div>
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-sm md:text-md  mb-2">
						Socials
					</h1>
					<div className="flex flex-col">
						{socialLinks.map((link, index) => (
							<FooterLink key={index} href={link.href} text={link.text} type={link.type} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
