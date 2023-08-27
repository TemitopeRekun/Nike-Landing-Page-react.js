import React from "react";

const Button = ({ label, iconUrl }) => {
	return (
		<button type="button" className="flex justify-center items-center g-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
			{label}
			<img
				src={iconUrl}
				alt="arrowRight"
				className="rounded-full ml-2 w-5 h-5"
			/>
		</button>
	);
};

export default Button;
