import {
  AreaChart,
  Bath,
  Bed,
  DollarSign,
  Grid2X2,
  LocateIcon,
  LocateOffIcon,
  MapIcon,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function PropertyCard() {
  return (
    <div className="card bg-base-200 w-full shadow-lg shadow-base-300">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="badge badge-secondary z-10 absolute left-0 top-0 m-5">
          $4200/mo
        </div>
      </figure>
      <div className="card-body space-y-2">
        <p className="text-sm font-normal">Property Type</p>
        <h2 className="card-title font-bold">Property Name</h2>
        <div className="grid grid-cols-3 place-items-center gap-5">
          <span className="text-sm grid grid-cols-2 place-items-center">
            <Bed /> 3 Beds
          </span>
          <span className="text-sm grid grid-cols-2 place-items-center">
            <Bath /> 2 Baths
          </span>
          <span className="text-sm grid grid-cols-2 place-items-center">
            <Grid2X2 /> 1,500 sqft
          </span>
        </div>
        <div className="grid grid-cols-3 place-items-center gap-10 text-green-600">
          <span className="text-xs grid place-items-center">Weekly</span>
          <span className="text-xs grid place-items-center">Monthly</span>
          <span className="text-xs grid place-items-center">Yearly</span>
        </div>
        <hr className="divider" />
        <div className="card-actions items-center justify-end">
          <p className="flex items-center text-rose-500">
            <MapPin /> Property Location
          </p>
          <Link href={"/properties/234"}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
