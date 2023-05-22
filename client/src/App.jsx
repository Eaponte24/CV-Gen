import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/App/Header/Nav";
import Questonnaire from "./components/App/Questonnaire";
import Login from "./components/App/Login";
import Pricing from "./components/App/Pricing";
import Signup from "./components/App/Signup";
import Footer from "./components/App/Footer/Footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Route, Routes, Navigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Auth from "./utils/auth";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  const reactAppKey = process.env.REACT_APP_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
      "X-React-App-Key": reactAppKey,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const loggedIn = Auth.loggedIn();

  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <body className="flex min-h-screen flex-col">
          {loggedIn && <Header />} {/* Render Header only when logged in */}
          <main className="flex-grow">
            <Routes>
              {loggedIn ? (
                <>
                  <Route path="/" element={<Questonnaire />} />
                  <Route path="/pricing" element={<Pricing />} />
                </>
              ) : (
                <>
                  <Route
                    path="/"
                    element={<Navigate to="/login" replace />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </>
              )}
            </Routes>
          </main>
          <Footer />
        </body>
      </Elements>
    </ApolloProvider>
  );
}

export default App;
