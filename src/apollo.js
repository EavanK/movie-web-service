import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movieql-api-eavan.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
