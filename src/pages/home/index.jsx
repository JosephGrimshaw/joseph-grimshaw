import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Blogs from "@/components/home/Blogs";
import Cta from "@/components/innerpages/Cta";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import KeyFeatures from "@/components/home/KeyFeatures";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 2 || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function HomePage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
        <Header2 />
        <div id="wrapper" className="wrap">
          <Hero />
          <Features />
          {/*<KeyFeatures />*/}
          {/*<Pricing />*/}
          {/*<Faq />*/}
          {/*<Feedback />*/}
          {/*<Blogs />*/}
          <Cta />
        </div>
        <Footer1 />
      </div>
    </>
  );
}
