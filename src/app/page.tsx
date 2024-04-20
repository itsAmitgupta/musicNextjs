import Herosection from "@/components/Herosection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-white text-center">Start learning next js</h1> */}
      <Herosection/>
    </main>
  );
}
