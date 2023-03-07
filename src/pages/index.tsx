import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Homepage</title>
				<meta name="description" content="This is the path to success." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/simpleT.svg" />
			</Head>
			<div className="flex flex-col justify-center items-center h-screen">
				<h1
					className={`text-slate-900 text-3xl font-medium ${inter.className} bg-red-100 `}
				>
					Hello Mom!
				</h1>
				<p className="mt-2 text-slate-400 text-base font-normal shadow-xl">
					But life goes on
				</p>
			</div>
		</>
	);
}
