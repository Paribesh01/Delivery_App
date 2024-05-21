import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
