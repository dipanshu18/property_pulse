export default function PropertyDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Property Details for {params.id}</h1>
    </div>
  );
}
