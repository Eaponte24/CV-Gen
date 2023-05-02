import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/App/Header/Nav";
import Questonnaire from "./components/App/Questonnaire";
import Login from "./components/App/Login";
import Pricing from "./components/App/Pricing";
import Signup from "./components/App/Signup";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const httpLink = createHttpLink({
	uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.REACT_APP_KEY}`,
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Elements stripe={stripePromise}>
				<Header />
				<Routes>
					<Route path="/" element={<Questonnaire />} />
					<Route path="/login" element={<Login />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Elements>
		</ApolloProvider>
	);
}

export default App;
