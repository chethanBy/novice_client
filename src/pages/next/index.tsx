import { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/layout/Header";

const inter = Inter({ subsets: ["latin"] });

interface ILearningNextProps {
	fact: { fact: string };
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts
	const res = await fetch("https://catfact.ninja/fact");
	const fact = await res.json();

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fact,
		},
	};
}

const LearningNext = ({ fact }: ILearningNextProps) => {
	const [count, setCount] = useState<number>(0);

	return (
		<div className="h-screen bg-slate-900 flex justify-center items-center flex-col overflow-y-scroll">
			<h1 className={`text-gray-100 ${inter.className} text-3xl font-medium`}>
				Learning Next!
			</h1>
			<div className="flex gap-x-2 my-2">
				<p className="text-gray-200 text-lg font-medium bg-pink-400 px-2 rounded-xl shadow-sm shadow-white min-w-[30px] text-center">
					{count}
				</p>
				<div className="relative">
					<button
						onClick={() => setCount(count + 1)}
						className="text-gray-100 text-lg font-medium bg-pink-600 px-4 rounded-xl hover:rounded-lg transform  duration-100 shadow-sm shadow-white z-[1] relative active:-translate-y-1"
					>
						+
					</button>
					<div className="w-full h-full bg-white absolute bottom-0 rounded-xl"></div>
				</div>
			</div>
			<p
				className={`text-orange-400 ${inter.className} text-xl font-medium max-w-sm text-center selection:bg-fuchsia-300`}
			>
				{fact.fact}
			</p>
		</div>
	);
};

export default LearningNext;
