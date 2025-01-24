import Divider from "@/components/Divider";
import PageFive from "@/pages/PageFive";
import PageFour from "@/pages/PageFour";
import PageOne from "@/pages/PageOne";
import PageThree from "@/pages/PageThree";
import PageTwo from "@/pages/PageTwo";

export default function Home() {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <Divider />
      <PageFive />
    </div>
  );
}
