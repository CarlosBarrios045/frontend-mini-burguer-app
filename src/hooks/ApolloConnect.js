import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Authorization Apollo
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_URI_BACKEND}/graphql`,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await localStorage.getItem("token");

  if (!token || token === null) return null;

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

// Config Apollo
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URI_BACKEND}/graphql`,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const ApolloConnect = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloConnect;
