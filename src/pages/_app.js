import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { UserSummary } from "../../context/userSummary";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <UserSummary>
            <Component {...pageProps} />
          </UserSummary>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
