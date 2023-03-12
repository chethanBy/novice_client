import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const LearningNext = () => {
	return (
		<div className="h-screen bg-slate-900 flex justify-center items-center">
			<h1 className={`text-white ${inter.className} text-3xl font-medium`}>
				Learning Next!
			</h1>
		</div>
	);
};

export default LearningNext;
