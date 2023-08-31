import React from "react";

const Button = ({
	label,
	iconUrl,
	borderColor,
	backgroundColor,
	textColor,
}) => {
	return (
		<button
			type="button"
			className={`flex justify-center  items-center border  g-2 px-7 py-4 font-montserrat text-lg leading-none
				${
					backgroundColor
						? `${backgroundColor} ${textColor} ${borderColor}`
						: "bg-coral-red  text-white border-coral-red"
				} rounded-full`}>
			{label}
			{iconUrl && (
				<img
					src={iconUrl}
					alt="arrowRight"
					className="rounded-full ml-2 w-5 h-5"
				/>
			)}
		</button>
	);
};

export default Button;
