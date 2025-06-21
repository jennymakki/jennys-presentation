import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
    {Object.entries(skills).map(([category, items]) => (
      <div
        key={category}
        className="bg-[#EBEBEB] rounded-2xl shadow-md p-6"
      >
        <h4 className="text-[#2090C8] text-xl font-semibold mb-2 capitalize">
          {category}
        </h4>
        <p className=" text-base">
          {items.join(", ")}
        </p>
      </div>
    ))}
  </div>
  );
}