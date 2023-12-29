import Link from "next/link";
import { HeaderBack } from "./components";

const NotFound = () => {
    return (
        <section className="min-h-[100vh] flex-1 border-r theme-grayBorder-200-700 max-w-[660px]">
          <HeaderBack title="Not found"/>

          <div className="p-3 mt-6 flex flex-col items-center space-y-4">
            <h4 className="text-center dark:text-twitterTextDarkmode">Could not find what you were looking for, go back to the homepage</h4>
            <Link href={"/"} className="btn btn-m btn-prim">Home</Link>
          </div>
        </section>
      );
}
 
export default NotFound;