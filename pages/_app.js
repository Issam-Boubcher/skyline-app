import { createTheme, NextUIProvider, globalCss } from "@nextui-org/react"
import AuthWrapper from "../components/AuthWrapper";
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css';
import Navbar from "../components/Navbar/Navbar";
import { Toaster } from 'react-hot-toast';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Head from "next/head";
let user = null;
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  // let user = [];
  const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      space: {},
      fonts: {
        sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'
        // }

      }
    }
  })
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider theme={theme}>
          <RecoilRoot>
            <AuthWrapper>
              <Navbar />
              <Toaster />
              <Head>
                <title>Skyline 1337</title>
              </Head>
              <Component {...pageProps} />
            </AuthWrapper>
          </RecoilRoot>
        </NextUIProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default MyApp;
