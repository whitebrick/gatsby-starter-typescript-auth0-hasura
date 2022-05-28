import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { pipe, map, mergeMap, fromPromise, fromValue } from "wonka";
import {
  createClient,
  Provider,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Exchange,
  Operation,
} from "urql";

interface UrqlProviderProps {
  children: React.ReactChildren;
}

const fetchOptionsExchange =
  (fn: any): Exchange =>
  ({ forward }) =>
  (ops$) => {
    return pipe(
      ops$,
      mergeMap((operation: Operation) => {
        const result = fn(operation.context.fetchOptions);
        return pipe(
          (typeof result.then === "function"
            ? fromPromise(result)
            : fromValue(result)) as any,
          map((fetchOptions: RequestInit | (() => RequestInit)) => ({
            ...operation,
            context: { ...operation.context, fetchOptions },
          }))
        );
      }),
      forward
    );
  };

const UrqlProvider = ({ children }: UrqlProviderProps) => {
  const { getAccessTokenSilently, getIdTokenClaims } = useAuth0();

  const url = process.env.GATSBY_HASURA_GRAPHQL_URL;
  let client = null;

  if (url) {
    client = createClient({
      url: url,
      exchanges: [
        dedupExchange,
        cacheExchange,
        fetchOptionsExchange(async (fetchOptions: any) => {
          await getAccessTokenSilently({
            audience: process.env.GATSBY_AUTH0_AUDIENCE,
            scope: "openid profile email offline_access",
            ignoreCache: true,
          });

          const tokenClaims = await getIdTokenClaims();
          const token = tokenClaims?.__raw;

          return Promise.resolve({
            ...fetchOptions,
            headers: {
              Authorization: token ? `Bearer ${token}` : "",
            },
          });
        }),
        fetchExchange,
      ],
    });
  } else {
    throw new Error("UrqlProvider: url not defined");
  }

  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;
