export default function Hero() {
  return (
    <div className="text-center p-14 bg-base-300 content-center">
      <h1 className="my-5 text-2xl md:text-4xl font-extrabold">
        Find your desired rental
      </h1>
      <p className="my-5 text-sm md:text-lg">
        Discover the properties that interests you
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <div>
          <input
            className="input input-bordered"
            type="text"
            placeholder="Enter location (City, State, etc.)"
          />
        </div>
        <select className="select select-bordered max-w-xs">
          <option selected>All</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
}
