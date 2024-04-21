import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
      <Herosection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
    </main>
  );
}
