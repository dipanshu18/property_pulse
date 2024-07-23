import Hero from "@/components/Hero";
import HomeRecentProperties from "@/components/HomeRecentProperties";
import InfoBox from "@/components/InfoBox";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 p-10">
        <InfoBox
          type="view"
          title="For Renters"
          content="Find your dream rental property. Bookmark properties and contact owners"
          btnText="Browse Properties"
          btnType="primary"
        />
        <InfoBox
          type="add"
          title="For Property Owners"
          content="List your properties. Rent as an airbnb or long term"
          btnText="Add Property"
          btnType="secondary"
        />
      </div>

      <div className="bg-base-300 p-10">
        <h1 className="text-4xl font-extrabold text-center">
          Recent Properties
        </h1>
        <HomeRecentProperties />
        <div className="text-center my-10">
          <Link href={"/properties"}>
            <button className="btn btn-outline px-10">See more</button>
          </Link>
        </div>
      </div>
    </>
  );
}
