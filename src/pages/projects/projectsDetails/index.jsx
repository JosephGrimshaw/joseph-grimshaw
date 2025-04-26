import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/cardArray/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import PostContent from "@/components/cardArray/PostContent";
import { projectsDetailsData } from "../../../data/projectsDetails";
import { projectData } from "@/data/projects";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog Details || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function ProjectsDetailsPage() {
  let params = useParams();
  const id = params.id;
  const projectsItem = projectData.filter((elm) => elm.id == id)[0] || projectData[0];
  const projectsDetailsItem = projectsDetailsData.filter(
    (elm) => elm.id == id
  )[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <PostContent item={projectsItem} detailsItem={projectsDetailsItem} title="Projects" />
          {/*<Newsletter />*/}
        </div>
        <Footer1 />
      </div>
    </>
  );
}
