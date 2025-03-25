import FooterLink from "./FooterLink";
import { navigationLinks, socialLinks } from "../util/footerLinksData";

export default function FloatingFooter() {

	return (
		<div className="bg-(--background-semi-dark) p-4 w-[400px] sm:w-[400px] md:w-[500px] lg:w-[600px] mx-auto grid grid-cols-2 mb-10 rounded-md h-auto">
			<div className="flex flex-col justify-end">
				<h1 className="text-(--primary-font-color) font-bold text-3xl md:text-5xl">
					Aaron<br/>
                    Estrellado. 
				</h1>
			</div>
			<div className="flex flex-row gap-6 justify-end mr-10">
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-lg sm:text-md mb-2">
						Explore
					</h1>
					<div className="flex flex-col">
						{navigationLinks.map((link, index) => (
							<FooterLink key={index} href={link.href} text={link.text} type={link.type} />
						))}
					</div>
				</div>
				<div className="h-full flex flex-col justify-start">
					<h1 className="text-(--primary-font-color) font-bold text-lg sm:text- mb-2">
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
