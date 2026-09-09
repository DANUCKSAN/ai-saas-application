import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">popular companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="John Doe"
          topic="Technology"
          subject="Programming"
          duration={60}
          color="#f0f0f0"
          bookmarked={true}
        />
        <CompanionCard
          id="2"
          name="Jane Smith"
          topic="Health"
          subject="Nutrition"
          duration={45}
          color="#e0e0e0"
          bookmarked={false}
        />
        <CompanionCard
          id="3"
          name="Bob Johnson"
          topic="Education"
          subject="History"
          duration={75}
          color="#d0d0d0"
          bookmarked={true}
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
