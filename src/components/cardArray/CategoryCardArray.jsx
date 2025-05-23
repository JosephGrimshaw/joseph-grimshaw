import React from "react";

import { Link } from "react-router-dom";
import Pagination from "../common/Pagination";

export default function CategoryCardArray({ category, cards, title }) {
  return (
    <div className="section py-3 sm:py-6 lg:py-9">
      <div className="container max-w-xl">
        <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header className="page-header panel vstack text-center">
            <h1 className="h3 lg:h1">Category: {category}</h1>
            <span className="m-0 opacity-60">
              Showing all under
              <br className="d-block lg:d-none" /> "{category}" category.
            </span>
          </header>
          <div className="row g-4 xl:g-8">
            <div className="col">
              <div className="panel text-center">
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                  {cards.map((elm, i) => (
                    <div key={i}>
                      <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-secondary dark:bg-gray-800">
                        <Link
                          className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                          style={{ borderRadius: 8 }}
                        >
                          {elm.category}
                        </Link>
                        <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                          <img
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            src={elm.imgSrc}
                            width={1280}
                            height={853}
                            alt="How can marketing help your business?"
                          />
                          <Link
                            to={`/${title.toLowerCase()}-details/${elm.id}`}
                            className="position-cover"
                            data-caption="How can marketing help your business?"
                          ></Link>
                        </figure>
                        <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                          <h3 className="h6 sm:h5 xl:h4 m-0 m-0">
                            <Link
                              className="text-none"
                              to={`/${title.toLowerCase()}-details/${elm.id}`}
                            >
                              {elm.title}
                            </Link>
                          </h3>
                          <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                            <li>
                              <div className="post-date hstack gap-narrow">
                                <span>{elm.date}</span>
                              </div>
                            </li>
                          </ul>
                        </header>
                      </article>
                    </div>
                  ))}
                </div>
                {/*<div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                  <ul
                    className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary"
                    data-uc-margin=""
                  >
                    <Pagination />
                  </ul>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
