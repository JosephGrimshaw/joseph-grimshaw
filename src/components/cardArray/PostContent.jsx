import { Link } from "react-router-dom";
import RelatedInsights from "./RelatedInsights";

import { Gallery, Item } from "react-photoswipe-gallery";

export default function PostContent({ item, detailsItem, title }) {
  function getDownload() {
    if ("download" in detailsItem) {
      return (
        <li>
          <a
            className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
            href={detailsItem.download}
            download
            target="_blank"
          >
            <i className="unicon-link icon-1" />
          </a>
        </li>
      )
      return (
        <></>
      )
    }
  }
  function getValidImg(idNum) {
    if ("src" + idNum in detailsItem) {
      if (idNum == 0) {
      return (
        <figure className="featured-image m-0">
          <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
            <img
              className="media-cover image uc-transition-scale-up uc-transition-opaque"
              alt={detailsItem["alt"+idNum]}
              src={detailsItem["src"+idNum]}
              width={detailsItem["width"+idNum]}
              height={detailsItem["height"]+idNum}
            />
          </figure>
        </figure>
      )
      }
      if (idNum == 1) {
        return (
        <figure className="float-end ms-3 mb-1">
                    <Item
                      original={detailsItem.src1}
                      thumbnail={detailsItem.src1}
                      width={detailsItem.width1}
                      height={detailsItem.height1}
                    >
                    {({ ref, open }) => (
                    <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                      <img
                        className="media-cover image uc-transition-scale-up uc-transition-opaque"
                        alt={detailsItem.alt1}
                        src={detailsItem.src1}
                        width={detailsItem.alt1}
                        height={detailsItem.height1}
                        ref={ref}
                      />
                      <a
                        onClick={open}
                        className="position-cover"
                        data-caption={detailsItem.caption1}
                      ></a>
                    </figure>
                    )}
                    </Item>
                <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                  {detailsItem.caption1}
                </figcaption>
              </figure>
      )
    }
    if (idNum == 2) {
      return (
        <figure className="my-3 sm:my-4">
                  <Item
                    original={detailsItem.src2}
                    thumbnail={detailsItem.src2}
                    width={detailsItem.width2}
                    height={detailsItem.height2}
                  >
                    {({ ref, open }) => (
                      <figure className="featured-image m-0 rounded ratio ratio-3x2 uc-transition-toggle overflow-hidden">
                        <img
                          className="media-cover image uc-transition-scale-up uc-transition-opaque"
                          alt={detailsItem.alt2}
                          src={detailsItem.src2}
                          width={detailsItem.width2}
                          height={detailsItem.height2}
                          ref={ref}
                        />
                        <a
                          onClick={open}
                          className="position-cover"
                          data-caption={detailsItem.caption2}
                        ></a>
                      </figure>
                      )}
                      </Item>
                  <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                    {item.caption2}
                  </figcaption>
                </figure>
      )
    }
    if (idNum == 3) {
      return (
        <figure className="float-start me-3 mb-0">
                    <Item
                      original={detailsItem.src3}
                      thumbnail={detailsItem.src3}
                      width={detailsItem.width3}
                      height={detailsItem.width3}
                    >
                      {({ ref, open }) => (
                        <figure className="featured-image m-0 rounded ratio ratio-1x1 sm:w-300px uc-transition-toggle overflow-hidden">
                          <img
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt={detailsItem.alt3}
                            src={detailsItem.src3}
                            width={detailsItem.width3}
                            height={detailsItem.height3}
                            ref={ref}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption={detailsItem.caption3}
                          ></a>
                        </figure>
                      )}
                    </Item>
                    <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                      {detailsItem.caption3}
                    </figcaption>
                  </figure>
      )
    }
    }
    return (<></>)
  }
  
  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
      >
        <div className="container max-w-xl">
          <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
            <li>
              <img
                alt="icon"
                className="me-1"
                src="/assets/images/common/icons/home.svg"
                width="18"
                height="18"
              />
            </li>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link to={`/${title.toLowerCase()}`}>{title}</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <Link to={`/${title.toLowerCase()}-category/${item.category}`}>{item.category}</Link>
            </li>
            <li>
              <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
            </li>
            <li>
              <span className="opacity-50">{item.title}</span>
            </li>
          </ul>
        </div>
      </div>
      <article className="post type-post single-post py-4 lg:py-6 xl:py-9">
        <div className="container max-w-xl">
          <div className="post-header">
            <div className="panel vstack gap-4 md:gap-6 xl:gap-8 text-center">
              <div className="panel vstack items-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto gap-2 md:gap-3">
                <h1 className="h4 sm:h2 lg:h1 xl:display-6">
                  {item.title}
                </h1>
                <ul className="post-share-icons nav-x gap-1 dark:text-white">
                  {/*}
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-facebook icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="#"
                    >
                      <i className="unicon-logo-x-filled icon-1" />
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href="https://www.linkedin.com/in/joseph-grimshaw-38259a321/"
                      target="_blank"
                    >
                      <i className="unicon-logo-linkedin icon-1" />
                    </a>
                  </li>
                  
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href ="mailto:1GrimshawJ@truroschool.com"
                    >
                      <i className="unicon-email icon-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="btn btn-md border-gray-900 border-opacity-15 w-32px lg:w-48px h-32px lg:h-48px text-dark dark:text-white dark:border-white hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                      href={detailsItem.github}
                      target="_blank"
                    >
                      <img className="dark:d-none" src={"/assets/images/icons/github.png"} />
                      <img className="d-none dark:d-block" src={"/assets/images/icons/github-dark.png"} />
                    </a>
                  </li>
                  {getDownload()}
                </ul>
              </div>
                  {getValidImg("")}
                  {/*
                  <figure className="featured-image m-0">
                <figure className="featured-image m-0 rounded ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden">
                <img
                    className="media-cover image uc-transition-scale-up uc-transition-opaque"
                    alt={detailsItem.alt}
                    src={detailsItem.src}
                    width={detailsItem.width}
                    height={detailsItem.height}
                  />*/}
            </div>
          </div>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="container max-w-lg">
            <Gallery>
              <div
                className="post-content panel fs-6 md:fs-5"
                data-uc-lightbox="animation: scale"
              >
                <p>
                  {detailsItem.p1}
                </p>
                <div className="panel mt-3">
                  {getValidImg(1)}
                  <p>
                    {detailsItem.p2}
                  </p>
                </div>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">{detailsItem.sub1}</h4>
                <p>
                  {detailsItem.p3}
                </p>
                {getValidImg(2)}
                <p>
                  {detailsItem.p4}
                </p>
                <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
                  {detailsItem.sub2}
                </h4>
                <p>
                  {detailsItem.p5}
                </p>
                <div className="panel my-3">
                  {getValidImg(3)}
                  <p>
                    {detailsItem.p6}
                  </p>
                </div>
                <p>
                  {detailsItem.p7}
                </p>
              </div>
            </Gallery>
            {/*<div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
              <ul className="nav-x gap-narrow text-primary">
                <li>
                  <span className="text-black dark:text-white me-narrow">
                    Tags:
                  </span>
                </li>
                {detailsItem.tags.map((item) => (
                  <li key={item.id}>
                  <a href={item.name} className="gap-0">
                    {item.name}
                    <span className="text-black dark:text-white">,</span>
                  </a>
                </li>
                ))}
              </ul>
              <ul className="post-share-icons nav-x gap-narrow">
                <li className="me-1">
                  <span className="text-black dark:text-white">Share:</span>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-facebook icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-logo-x-filled icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-email icon-1" />
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-md btn-outline-gray-100 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle"
                    href="#"
                  >
                    <i className="unicon-link icon-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9">
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <img
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="How can marketing help your business?"
                      src="/assets/images/blog/img-02.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      to={`/insights-details/1`}
                      className="position-cover"
                      data-caption="How can marketing help your business?"
                    ></Link>
                  </figure>
                </div>
                <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                  <span className="fs-7 opacity-60">Prev Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    How can marketing help your business?
                  </h6>
                </div>
                <Link to={`/insights-details/1`} className="position-cover"></Link>
              </div>
              <div className="new-post panel hstack w-100 sm:w-1/2">
                <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end rtl:text-start">
                  <span className="fs-7 opacity-60">Next Article</span>
                  <h6 className="h6 lg:h5 m-0">
                    Top 5 reasons to invest in marketing
                  </h6>
                </div>
                <div className="panel hstack justify-center w-100px h-100px">
                  <figure className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden">
                    <img
                      className="media-cover image uc-transition-scale-up uc-transition-opaque"
                      alt="Top 5 reasons to invest in marketing"
                      src="/assets/images/blog/img-01.jpg"
                      width="1280"
                      height="853"
                    />
                    <Link
                      to={`/insights-details/1`}
                      className="position-cover"
                      data-caption="Top 5 reasons to invest in marketing"
                    ></Link>
                  </figure>
                </div>
                <Link to={`/insights-details/1`} className="position-cover"></Link>
              </div>
            </div>
            <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
              <h4 className="h5 xl:h4 mb-5 xl:mb-6">Related to this topic:</h4>
              <div className="row child-cols-6 md:child-cols-4 gx-2 gy-4 sm:gx-3 sm:gy-6">
                <RelatedInsights />
              </div>
            </div>
            <a
              href="#commont"
              className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white border border-gray-200 dark:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <span>Be the first to write a comment.</span>
            </a> */}
          </div>
        </div>
      </article>
    </>
  );
}
