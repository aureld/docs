import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      Click{" "}
      <div className="mt-16">
        <Link href="/documents/123">
          {" "}
          <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
        </Link>{" "}
        to go to doc id
      </div>
    </div>
  );
};

export default Home;
