import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const NextDynamicPath = () => {
	return (
		<div className="h-screen bg-slate-900 flex justify-center items-center">
			<h1 className={`text-white ${inter.className} text-3xl font-medium`}>
				NextDynamicPath
			</h1>
		</div>
	);
};

export default NextDynamicPath;
