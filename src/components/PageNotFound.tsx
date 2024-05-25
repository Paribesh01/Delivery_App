import { Link } from "react-router-dom";
import Button from "./Button";

const PageNotFound = () => {
  return (
    <section className=" dark:bg-gray-900  bg-slate-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col gap-5 items-center justify-center bg-white p-10 shadow-md">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link to="/">
            <Button title="Back to HomePage" arrow={false} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
