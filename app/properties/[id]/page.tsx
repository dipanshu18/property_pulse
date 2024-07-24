import {
  ArrowBigLeft,
  ArrowLeft,
  Bookmark,
  MapPin,
  Share2Icon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PropertyDetail({ params }: { params: { id: string } }) {
  return (
    <div className="overflow-hidden">
      {/*  <!-- Image --> */}
      <figure>
        <Image
          src="https://picsum.photos/id/493/800/600"
          alt="Property Header Image"
          width={300}
          height={100}
          className="aspect-video w-full h-96"
          priority
          quality={100}
        />
        <div className="bg-base-300">
          <Link href={"/properties"}>
            <button className="flex gap-2 p-5">
              <ArrowLeft />
              Back to Properties
            </button>
          </Link>
        </div>
      </figure>
      {/*  <!-- Body--> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 m-5 space-x-2 space-y-5">
        <div className="md:col-span-2">
          <div className="bg-base-300 p-5 my-5">
            <span className="mb-5 text-xl font-light">Property Type</span>
            <header className="mb-4">
              <h1 className="text-2xl font-extrabold">Property Title</h1>
              <p className="flex gap-1 text-rose-600 my-3">
                <MapPin /> Property Location
              </p>
              <div className="my-2 p-5 bg-slate-800">
                <h3 className="font-medium text-white">Rate & Options</h3>
              </div>
              <div className="my-5 grid grid-cols-3 place-items-center gap-5">
                <span>Nightly: </span>
                <span>
                  Weekly: <span className="font-extrabold text-2xl">$4200</span>
                </span>
                <span>
                  Yearly: <span className="font-extrabold text-2xl">$4200</span>
                </span>
              </div>
            </header>
          </div>

          <div className="bg-base-300 p-5 my-5">
            <header className="mb-4">
              <h1 className="text-xl font-bold">Description & Details</h1>

              <div className="my-5 grid grid-cols-3 place-items-center gap-2">
                <span className="text-primary font-medium text-lg">2Beds </span>
                <span className="text-primary font-medium text-lg">2Baths</span>
                <span className="text-primary font-medium text-lg">
                  1475sqft
                </span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              nesciunt eveniet. Sed, sit illum est illo iure temporibus optio
              consequuntur enim dolor modi dignissimos odio reprehenderit fugiat
              qui amet consequatur.
            </p>
          </div>

          <div className="bg-base-300 p-5 my-5">
            <header className="mb-4">
              <h1 className="text-xl font-bold">Amenities</h1>

              <div className="my-5 grid grid-cols-3 md:grid-cols-5 md:place-items-center gap-5">
                <span className="text-primary font-medium">Wifi</span>
                <span className="text-primary font-medium">Full Kitchen</span>
                <span className="text-primary font-medium">24/7 Security</span>
              </div>
            </header>
          </div>
        </div>

        <div className="md:col-span-1 space-y-4">
          <button className="btn btn-warning w-full">
            <Bookmark /> Bookmark property
          </button>
          <button className="btn btn-success w-full">
            <Share2Icon /> Share property
          </button>

          <div className="p-5 my-5 bg-base-300 space-y-2">
            <h1 className="font-extrabold">Contact Property Manager</h1>
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone no."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="textarea textarea-bordered"
                  required
                />
              </div>

              <div className="form-control mt-5">
                <button className="btn btn-outline w-full">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
