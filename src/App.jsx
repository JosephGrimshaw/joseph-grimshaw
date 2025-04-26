import Context from "./context/Context";
import "./styles/style.scss";
import "react-modal-video/scss/modal-video.scss";
import "photoswipe/dist/photoswipe.css";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import anime from "animejs";

import MobileMenu from "@/components/headers/component/MobileMenu";
import BacktoTop from "@/components/common/BacktoTop";
import { ParallaxProvider } from "react-scroll-parallax";
import ContactModal from "@/components/modals/ContactModal";
import NewsletterModal from "@/components/modals/NewsletterModal";
import SearchModal from "@/components/modals/SearchModal";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import HomePage from "./pages/home";
import Resume from "./pages/resume";
//import FeaturesPage from "./pages/innerPages/page-features";
import InsightsCategory from "./pages/insights/insightsCategory";
import ProjectsCategory from "./pages/projects/projectsCategory";
import AboutPage from "./pages/innerPages/page-about";
import Insights from "./pages/insights";
import Projects from "./pages/projects";
import InsightsDetails from "./pages/insights/insightsDetails";
import ProjectsDetails from "./pages/projects/projectsDetails";
import NotFoundPage from "./pages/not-found";
import ContactPage2 from "./pages/innerPages/page-contact";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anime]");

    // Intersection Observer callback function
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const dataAnime = element.getAttribute("data-anime");

          const modifieddataAnime = dataAnime.replace(
            /anime\.stagger\((\d+),\s*\{start:\s*(\d+)\}\)/,
            "$1,$2"
          );

          if (modifieddataAnime) {
            const parseAnimeData = (data) => {
              const settings = {};
              data.split(";").forEach((param) => {
                const [key, value] = param
                  .split(":")
                  .map((item) => item.trim());
                if (key && value) {
                  settings[key] = value;
                }
              });
              return settings;
            };

            const animeSettings = parseAnimeData(modifieddataAnime);

            let targets;
            if (animeSettings.targets === ">*") {
              targets = element.children;
            } else {
              targets = element.querySelectorAll(animeSettings.targets);
            }
            // console.log(animeSettings);

            // Apply Anime.js animation
            anime({
              loop: animeSettings.loop ? true : false,
              targets: targets,
              translateX: JSON.parse(animeSettings.translateX || "[0, 0]"),
              translateY: JSON.parse(animeSettings.translateY || "[48, 0]"),
              opacity: [0, 1],
              // direction: "alternate",
              easing: animeSettings.easing || "spring(1, 80, 10, 0)",
              duration: Number(animeSettings.duration) || 450,
              delay: animeSettings.delay
                ? animeSettings.delay.includes(",")
                  ? anime.stagger(animeSettings.delay.split(",")[0] / 1, {
                      start: animeSettings.delay.split(",")[1] / 1,
                    })
                  : animeSettings.delay / 1
                : 0,
            });

            // Unobserve the element after animation triggers
            observer.unobserve(element);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0, // Trigger when 10% of the element is in view
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer on component unmount
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [pathname]);
  return (
    <>
      <Context>
        <ParallaxProvider>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />

              <Route path="home" element={<HomePage />} />

              {/*<Route path="page-features" element={<FeaturesPage />} />*/}
              <Route path="about" element={<AboutPage />} />

              <Route path="contact" element={<ContactPage2 />} />

              <Route path="insights" element={<Insights />} />
              <Route path="insights-category/:category" element={<InsightsCategory />} />
              <Route path="projects-category/:category" element={<ProjectsCategory />} />
              <Route path="projects" element={<Projects />} />
              <Route path="resume" element={<Resume />} />
              <Route path="insights-details/:id" element={<InsightsDetails />} />
              <Route path="projects-details/:id" element={<ProjectsDetails />} />

              <Route path="*" element={<NotFoundPage />} />


              {/* main multipage */}
              {/* <Route
                path="main-multi-page"
                element={<Home1MainDemoMultiPage />}
              /> */}
            </Route>
          </Routes>
        </ParallaxProvider>
        <MobileMenu />
        <ContactModal />
        <NewsletterModal />
        <SearchModal />
        <BacktoTop />
        <ScrollTopBehaviour />
      </Context>
    </>
  );
}

export default App;
