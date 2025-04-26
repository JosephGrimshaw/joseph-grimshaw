import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      <li>
        <Link to={`/projects`}>Projects</Link>
      </li>
      <li>
        <Link to={`/resume`}>Resume</Link>
      </li>
      {/*<li>
        <Link to={`/insights`}>Insights</Link>
      </li>*/}
      <li>
        <Link to={`/about`}>About</Link>
      </li>
      <li>
        {/*<Link to={`/contact`}>Contact</Link>*/}
        <Link to={"mailto:1GrimshawJ@truroschool.com"}>Contact</Link>
      </li>
    </>
  );
}
