import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-content-center place-items-center bg-base-300 p-5 m-10 gap-5">
      <TriangleAlert size={200} />
      <h1 className="text-5xl font-semibold">Page Not Found</h1>
      <p>The page you{"'"}re looking for does not exists</p>
      <Link href={"/"}>
        <button className="btn btn-error">Go Home</button>
      </Link>
    </div>
  );
}
