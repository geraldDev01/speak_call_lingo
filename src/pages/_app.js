import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/static/styles/global.css";
import "../static/styles/main.scss";
import { FormTypeProvider } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FormTypeProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </FormTypeProvider>
    </>
  );
}
