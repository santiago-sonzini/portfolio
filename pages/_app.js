import { ThemeProvider } from "next-themes";
import AppContext from "../context/state";
import '../styles/globals.css';
import lenguajeObject from '../context/lenguajesObject';
import { useState } from 'react';


function App({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = lenguajeObject;
  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider
        value={{
          state: {
            languages: languageObject[languageSelected],
            languageSelected: languageSelected,
          },
          setLanguageSelected: setLanguageSelected,
        }}
      >
       <Component {...pageProps} />
      </AppContext.Provider>
      
    </ThemeProvider>
  );
}

export default App;