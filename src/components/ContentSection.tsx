import Image, { StaticImageData } from "next/image";

type ContentSectionProps = {
  content: string | React.ReactElement;
  sectionHeadline?: string;
  image?: {
    src: string | StaticImageData;
    alt: string;
    isImageLeft: boolean;
  };
  className?: string;
};

const ContentSection = ({
  content,
  sectionHeadline,
  image,
  className = "",
}: ContentSectionProps) => {
  return (
    <div className={`py-6 ${className}`}>
      <h3 className="text-h3 font-bold">{sectionHeadline}</h3>
      {image ? (
        <div className="flex flex-col gap-20 py-6 md:flex-row">
          {image.isImageLeft && (
            <Image
              className="object-contain md:w-1/2"
              src={image.src}
              alt={image.alt}
            />
          )}
          <div className="text-justify md:w-1/2">{content}</div>
          {!image.isImageLeft && (
            <Image
              className="object-contain md:w-1/2"
              src={image.src}
              alt={image.alt}
            />
          )}
        </div>
      ) : (
        <p className="text-justify">{content}</p>
      )}
    </div>
  );
};

export default ContentSection;
