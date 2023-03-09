import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: "https://flyby-router-demo.herokuapp.com/",
		cache: new InMemoryCache(),
	});
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />)
		</ApolloProvider>
	);
}
