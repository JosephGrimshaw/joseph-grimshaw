import CommingSoon from "@/components/otherPages/CommingSoon";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Joseph Grimshaw",
  description:
    "Joseph Grimshaw",
};
export default function CommingSoonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
        <div id="wrapper" className="wrap">
          <CommingSoon />
        </div>
      </div>
    </>
  );
}
