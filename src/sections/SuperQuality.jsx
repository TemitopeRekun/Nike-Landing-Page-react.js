import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
					We Provide You <span className="text-coral-red">Super</span> {""}
					<span className="text-coral-red">Quality</span> Shoes
				</h2>
				<p className="mt-4 lg:max-w-lg info-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
					officia id fugiat. Libero incidunt tempora at ad aliquid, cumque
					hic aperiam rem sed inventore obcaecati, maiores sint repellat
					corporis nobis.
				</p>
				<p className="mt-6 lg:max-w-lg info-text">
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className="mt-11">
					<Button label="View Details" />
				</div>
			</div>

			<div className="flex felx-1 justify-center items-center">
				<img
					src={shoe8}
					alt="shoe8"
					width={517}
					height={522}
					className="object-contain"
				/>
			</div>
		</section>
	);
};

export default SuperQuality;
