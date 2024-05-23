import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@material-tailwind/react";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
