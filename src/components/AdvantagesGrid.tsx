import ContentContainer from "./ContentContainer";

type Advantage = {
  icon: React.ReactNode;
  headline: string;
  description: string;
};

type AdvantagesGridProps = {
  gridTitle: string;
  advantages: Advantage[];
};

const AdvantagesGrid = ({ gridTitle, advantages }: AdvantagesGridProps) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-h3 font-bold">{gridTitle}</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {advantages.map((advantage, index) => (
          <div
            className="flex flex-col items-center gap-4 rounded-lg bg-secondary p-4 text-center shadow-lg"
            key={index}
          >
            {advantage.icon}
            <h5 className="text-h5 font-bold text-text ">
              {advantage.headline}
            </h5>
            <p className="w-3/4 text-text ">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesGrid;
