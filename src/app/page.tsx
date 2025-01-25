import Divider from "@/components/Divider";
import Marque from "@/components/Marque";
import InstallNowPage from "@/pages/InstallNowPage";
import PageFive from "@/pages/PageFive";
import PageFour from "@/pages/PageFour";
import PageOne from "@/pages/PageOne";
import PageThree from "@/pages/PageThree";
import PageTwo from "@/pages/PageTwo";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  return (
    <div>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <Divider />
      <Testimonials />
      <Divider />
      <PageFive />
      <InstallNowPage />
      <Marque />
    </div>
  );
}
