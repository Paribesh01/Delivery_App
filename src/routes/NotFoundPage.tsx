import Navbar from "../components/Navbar";

export function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-100vh flex justify-center align-middle">
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
}
