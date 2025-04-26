import Header2 from "@/components/headers/Header2";
import Newsletter from "@/components/cardArray/Newsletter";
import Footer1 from "@/components/footers/Footer1";
import PostContent from "@/components/cardArray/PostContent";
import { insightsDetailsData } from "../../../data/insightsDetails";
import { allInsights } from "@/data/insights";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Blog Details || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function InsightsDetailsPage() {
  let params = useParams();
  const id = params.id;
  const insightsItem = allInsights.filter((elm) => elm.id == id)[0] || allInsights[0];
  const insightsDetailsItem = insightsDetailsData.filter(
    (elm) => elm.id == id
  )[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <PostContent item={insightsItem} detailsItem={insightsDetailsItem} title="Insights" />
          <Newsletter />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
