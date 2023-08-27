import {
	Hero,
	PopularProduct,
	Services,
	SpecialOffer,
	Suscribe,
	CustomerReviews,
	Footer,
	SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
	<main className="relative">
		<Nav />
		<section className="xl:padding-1 wide:padding-r padding-b">hero</section>
		<section className="padding">PopularProduct</section>
		<section className="padding">superquality</section>
		<section className="padding padding-x py-10">services</section>
		<section className="padding">specialoffer</section>
		<section className="padding bg-pale-blue paddding">
			<CustomerReviews />
		</section>
		<section className="padding padding-x sm:py-32 py-16 w-full">
			<Suscribe />
		</section>
		<section className="padding bg-black padding-x padding-t pb-8">
			<Footer />
		</section>
	</main>
);

export default App;
