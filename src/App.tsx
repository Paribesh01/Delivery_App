import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { router } from "./router";
import { ThemeProvider } from "@material-tailwind/react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <Router>{router}</Router>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
