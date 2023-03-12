import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });
const NextDynamicPath = () => {
	const router = useRouter();

	return (
		<div className="h-screen bg-slate-900 flex justify-center items-center">
			<h1 className={`text-white ${inter.className} text-3xl font-medium`}>
				Hello
			</h1>
		</div>
	);
};

export default NextDynamicPath;
