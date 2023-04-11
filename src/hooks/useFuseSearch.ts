import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export const useFuseSearch = (
	list: any[],
	queryString: string,
	options: any = { isCaseSensitive: false }
) => {
	const fuse = new Fuse(list, { ...options });
	const [queryResults, setQueryResults] = useState<any[]>(list);

	useEffect(() => {
		if (!queryString) {
			return;
		}
		const results = fuse.search(queryString).map((each) => ({ ...each.item }));
		setQueryResults(results);
	}, [queryString]);

	return queryResults;
};
