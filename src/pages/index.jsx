import Home1 from "./homes/home-2";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Joseph Grimshaw",
  description:
    "Joseph Grimshaw",
};
export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Home1 />
    </>
  );
}
