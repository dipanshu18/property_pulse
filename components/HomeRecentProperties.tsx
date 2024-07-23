import PropertyCard from "./PropertyCard";

export default function HomeRecentProperties() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 m-5">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </section>
  );
}
