import TitleHeader from "../TitleHeader";

export default function MyStory() {
  return (
    <div className="mt-10">
      <TitleHeader />
      <div className="mt-5 relative bg-white flex justify-center items-center dark:bg-[#00283a] shadow-lg px-10 py-10 rounded-lg">
        <h2 className="text-lg font-semibold max-md:text-sm">
          Consectetur adipisicing elit. Rem minima maiores, praesentium, aperiam
          eveniet tenetur consequatur beatae id est.
        </h2>
        <span className="text-6xl max-md:text-3xl text-[#70ba65] absolute bottom-5 right-20">
          ,,
        </span>
      </div>
    </div>
  );
}
