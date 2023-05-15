import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/App/Header/Nav";
import Questonnaire from "./components/App/Questonnaire";
import Login from "./components/App/Login";
import Pricing from "./components/App/Pricing";
import Signup from "./components/App/Signup";
import Footer from "./components/App/Footer/Footer";
import NewTokenModal from "./components/App/Modals/NewTokenModal";
import LowTokenModal from "./components/App/Modals/LowTokenModal";
import NoTokenModal from "./components/App/Modals/NoTokenModal";
import showModal from "./utils/showModal";
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

import Auth from './utils/auth';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const httpLink = createHttpLink({
	uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	const reactAppKey = process.env.REACT_APP_KEY;
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : '',
		'X-React-App-Key': reactAppKey,
	  },
	};
  });

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	const [tokens, setTokens] = useState(0);
	const [newSub, setNewSub] = useState(false);

	useEffect(() => {
		async function fetchTokenCount() {
			// Call API to fetch the user's token count and tier
			const tokens = 2; // Replace with the actual token count from db
			const tier = "free"; // Replace with the actual tier from db
			setTokens(tokens);
			setNewSub(tier === "pro");
		}

		fetchTokenCount();
	}, []);

	const { showNewTokenModal, showLowTokenModal, showNoTokenModal } =
		showModal(tokens, newSub);

	return (
		<ApolloProvider client={client}>
			<Elements stripe={stripePromise}>
				<div className="flex min-h-screen flex-col">
					<Header />
					{showNewTokenModal && <NewTokenModal />}
					{showLowTokenModal && <LowTokenModal />}
					{showNoTokenModal && <NoTokenModal />}
					<div className="flex-grow">
						<Routes>
							<Route path="/" element={<Questonnaire />} />
							<Route path="/login" element={<Login />} />
							<Route path="/pricing" element={<Pricing />} />
							<Route path="/signup" element={<Signup />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</Elements>
		</ApolloProvider>
	);
}

export default App;
