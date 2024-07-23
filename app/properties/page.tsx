import PropertyCard from "@/components/PropertyCard";

export default function Properties() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 p-5 m-5">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </section>
  );
}
