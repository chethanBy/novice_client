import { Inter } from "next/font/google";
import { getTodos } from "@/queries/todo";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useFuseSearch } from "@/hooks/useFuseSearch";

const inter = Inter({ subsets: ["latin"] });

interface IGetAllTodosObj {
	title: string;
	description: string;
	upvotes: number;
	_id: string;
}

const Todos = () => {
	const { loading, data, error } = useQuery(getTodos);
	const [queryString, setQueryString] = useState<string>("");

	const searchResults = useFuseSearch(data?.getAllTodos || [], queryString, {
		keys: ["title", "description", "upvotes"],
		isCaseSensitive: false,
		threshold: 0.5,
	});

	const allTodos = queryString ? searchResults : data?.getAllTodos;

	if (loading) {
		return <p className="text-slate-900 text-2xl">Loading</p>;
	}

	if (error) {
		return <p className="text-slate-900 text-2xl">Error</p>;
	}
	console.log({ data });
	return (
		<div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center">
			<h1 className={`text-white text-2xl ${inter.className} mb-4`}>
				List of todos!
			</h1>
			<div className="max-w-lg sm:max-w-xl w-full border-2 border-green-400 rounded-lg shadow-lg mx-2">
				<div className="flex m-2 ">
					<input
						type="text"
						className="w-full pl-2"
						placeholder="Search for your todos"
						onChange={(e) => setQueryString(e.target.value)}
						value={queryString}
					/>
					<button className="text-neutral-400 py-1 px-2 hover">Search</button>
				</div>
			</div>
			<div className="flex gap-x-4 w-full px-8 justify-center flex-col sm:flex-row items-center">
				{allTodos.map((each: IGetAllTodosObj) => (
					<div
						key={each._id}
						className={`${inter.className} text-white border border-white px-4 py-2 mt-4 w-full max-w-[300px]`}
					>
						<h3 className="text-slate-500 text-base">{each.title}</h3>
						<p className="text-sm">{each.description}</p>
						<p>{each.upvotes}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Todos;
