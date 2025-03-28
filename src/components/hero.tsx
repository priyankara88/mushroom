import HeroImge from "../assets/hero.webp";

const Hero = () => {
  return (
    <div
      className={`flex w-full h-[677px] `}
      style={{
        backgroundImage: `url(${HeroImge})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="text-[80px] leading-[105%] text-[700] -space-x-[-2%] ">
          Discover the World of Mushroom Foraging
        </div>
        <div className="text-[80px] leading-[105%] text-[900] -space-x-[-2%] text-yellow-600">
          Mushroom Foraging
        </div>
        <div className="text-[20px] leading-[160%] text-white">
          Mushroom foraging is the art and science of identifying and collecting
          wild mushrooms.
        </div>
        <div className="text-[20px] leading-[160%] text-white">
          It's a practice that combines outdoor exploration, botanical
          knowledge, and culinary adventure. Foragers venture into forests,
          fields, and even urban green spaces to discover these hidden
          treasures.
        </div>
        <div className="text-[20px] leading-[160%] text-white">
          But beware this hobby requires careful study and respect for nature,
          as some mushrooms can be dangerous if misidentified.
        </div>
      </div>
    </div>
  );
};

export default Hero;
