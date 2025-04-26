import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-4 xl:py-4 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            {/*<div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link to={`/`}>
                        <img
                          className="w-32px text-primary"
                          alt="Lexend"
                          src="/assets/images/common/logo-mark.svg"
                          width="34"
                          height="34"
                        />
                      </Link>
                      <p>
                        This powerfull tool eliminates the need to leave
                        Salesforce to get things done as I can create a custom
                        proposal with dynamic pricing tables.
                      </p>
                    </div>
                    <div className="hstack items-start gap-1">
                      <a href="#">
                        <img
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Google Play Store"
                          data-uc-svg=""
                          src="/assets/images/common/playstore.svg"
                          width="135"
                          height="40"
                        />
                      </a>
                      <a href="#">
                        <img
                          className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                          alt="Apple Store"
                          data-uc-svg=""
                          src="/assets/images/common/appstore.svg"
                          width="134"
                          height="40"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link to={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-center items-center lg:items-center gap-1 lg:gap-2">
                <p className="opacity-60">
                  JosephGrimshaw © 2025, All rights reserved.
                </p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/projects">Projects</a>
                  </li>
                  <li>
                    <a href="/resume">Resume</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="mailto:1GrimshawJ@truroschool.com">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank">
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="vr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
