import Header2 from "@/components/headers/Header2";

import Footer2 from "@/components/footers/Footer2";
import Newsletter from "@/components/cardArray/Newsletter";
import BreadCumb from "@/components/cardArray/BreadCumb";
import CategoryCardArray from "@/components/cardArray/CategoryCardArray";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { projectData } from '../../../data/projects';
const metadata = {
  title:
    "Blog Category || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function InsightsCategory() {
  let params = useParams();
  const category = params.category.split("%20").join(" ");
  const validCards = projectData.filter((elm) => elm.category === category);
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <BreadCumb category={category} title="Projects" />
          <CategoryCardArray category={category} cards={validCards} title="Projects" />
          {/*<Newsletter />*/}
        </div>
        <Footer2 />
      </div>
    </>
  );
}
