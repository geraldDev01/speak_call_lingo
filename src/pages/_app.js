import "tailwindcss/tailwind.css";

import "@/static/styles/global.css";
import "../static/styles/main.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
