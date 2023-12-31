import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Nike image" width={130} height={29} />
				</a>

				<ul className="flex flex-1 justify-center mx-5 items-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.label} id={link.href}>
							<a
								href={link.href}
								className="font-montserrat leading-normal text-lg text-slate-gray">
								{link.label}
							</a>
						</li>
					))}

					<li>
						<a
							className="text-gray-600 leading-normal text-lg"
							href="#sign-in">
							Sign in / Explore Now
						</a>
					</li>
				</ul>

				<div className="max-lg:block hidden cursor-pointer">
					<img src={hamburger} alt="menu" width={25} height={25} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
