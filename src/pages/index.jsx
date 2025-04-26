import Home1 from "./homes/home-2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 || Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
  description:
    "Lexend - Full-featured, professional-looking software, saas and startup reactjs template.",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home1 />
    </>
  );
}
