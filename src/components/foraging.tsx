import Outdoor from "../assets/outdoor-exploration.webp";

const Foraging: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-[48px] font-[700] text-white">
        The joys of mushroom foraging
      </div>
      <div className="text-[#CBC9C9] mb-7">
        oraging for mushrooms can be a rewarding experience for many reasons.
        People may venture off into the woods to forage for mushrooms because it
        allows them to connect with nature, enjoy the thrill of the hunt, and
        savor the satisfaction of finding a hidden culinary treasure.{" "}
      </div>
      <div className="w-full flex gap-[24px] items-center justify-center">
        <Card img={Outdoor} />
        <Card img={Outdoor} />
        <Card img={Outdoor} />
      </div>
    </div>
  );
};

export default Foraging;

const Card = ({ img }) => {
  return (
    <div className="w-[361px] h-[470px] bg-[#221e1e] p-2">
      <img src={img} alt="out door" className="p-2 rounded-2xl" />
      <div className="text-yellow-500 text-[16px]">Outdoor Exploration</div>
      <span className="text-[#CBC9C9] text-[12px]">
        Mushroom foraging takes you off the beaten path and into the heart of
        nature. Learn to read the landscape, identifying prime mushroom habitats
        from lush forest floors to sun-dappled meadows. Every expedition is a
        new adventure, with the potential for exciting discoveries around every
        tree and under every log.
      </span>
    </div>
  );
};
