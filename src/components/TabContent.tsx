import Image, { StaticImageData } from "next/image";
import ContentContainer from "./ContentContainer";

type TabContentProps = {
  contentPre: string | React.ReactElement;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  prosAndCons?: {
    pros?: Array<string>;
    cons?: Array<string>;
  };
  contentPost?: string | React.ReactElement;
};

const TabContent = ({
  image,
  contentPre,
  prosAndCons,
  contentPost,
}: TabContentProps) => {
  return (
    <ContentContainer className="flex w-full justify-center">
      <div className="flex flex-col gap-12">
        <div className="text-justify">{contentPre}</div>
        <div className="flex flex-col-reverse gap-12 md:flex-row">
          <Image
            src={image.src}
            alt={image.alt}
            className="w-2/3 object-contain"
          />
          <div className="flex w-1/3 flex-col gap-6">
            <div>
              <h5 className="text-h5 font-bold">Vorteile</h5>
              <ul className="ml-5 list-disc">
                {prosAndCons?.pros?.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-h5 font-bold">Nachteile</h5>
              <ul className="ml-5 list-disc">
                {prosAndCons?.cons?.map((entry, index) => (
                  <li key={index}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-justify">{contentPost}</div>
      </div>
    </ContentContainer>
  );
};

export default TabContent;
