import Header2 from "@/components/headers/Header2";
import { projectData } from "../../data/projects";
import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/cardArray/Newsletter";
import CardArray from "@/components/cardArray/CardArray";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog 1 || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function BlogPage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <CardArray cards={projectData} title="Projects" />
          {/*<Newsletter />*/}
        </div>
        <Footer2 />
      </div>
    </>
  );
}
