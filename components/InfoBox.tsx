import Link from "next/link";

interface InfoBoxProps {
  type: "view" | "add";
  title: string;
  content: string;
  btnText: string;
  btnType: "primary" | "secondary";
}

export default function InfoBox({
  type,
  title,
  content,
  btnText,
  btnType,
}: InfoBoxProps) {
  return (
    <div
      className={`${
        btnType === "primary" ? "bg-slate-400" : "bg-secondary"
      } px-10 py-5 rounded-xl my-5`}
    >
      <h1 className="text-2xl font-semibold my-3">{title}</h1>
      <p className="text-sm my-2">{content}</p>
      <Link href={type === "view" ? "/properties" : "/properties/add"}>
        <button
          className={`my-2 btn ${
            btnType === "primary" ? "btn-primary" : "btn-active"
          }`}
        >
          {btnText}
        </button>
      </Link>
    </div>
  );
}
