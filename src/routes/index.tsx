import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/navbar";
import Hero from "../components/hero";
import Foraging from "../components/foraging";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-[#2D2726] ">
      <div className="ml-10 mr-10">
        <Navbar />
        <Hero />
        <div>
          <Foraging />
        </div>
      </div>
    </div>
  );
}
