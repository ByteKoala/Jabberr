import "../styles/globals.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { GraphQLProvider } from "../components/GraphQLProvider";
import 'react-multi-carousel/lib/styles.css';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
    </SessionProvider>
  );
}
