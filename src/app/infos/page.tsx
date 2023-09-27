import ContentSection from "@/components/ContentSection";
import Potential from "@/assets/images/economic-potential.jpg";
import CSVImage from "@/assets/images/csv-data.jpg";
import FirstSectionContnet from "@/content/home/firstSection.mdx";
import SecondSectionContnet from "@/content/home/secondSection.mdx";
import ContentContainer from "@/components/ContentContainer";
import AdvantagesGrid from "@/components/AdvantagesGrid";
import { FaMoneyBillAlt, FaFastForward } from "react-icons/fa";
import { GrCluster } from "react-icons/gr";

export default function Root() {
  return (
    <ContentContainer className="flex flex-col items-center">
      <h1 className="mb-8 text-center text-h1 font-bold">
        Schnellere{" "}
        <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Visualisierungen
        </span>{" "}
        von Open Data
      </h1>
      <ContentSection
        content={<FirstSectionContnet />}
        image={{
          src: Potential,
          alt: "Ökonomisches Potenzial",
          isImageLeft: true,
        }}
      />
      <AdvantagesGrid
        gridTitle="Vorteile der Erstvisualisierungen"
        advantages={[
          {
            icon: <FaFastForward size={40} />,
            headline: "Zeitersparnis",
            description:
              "Die Analyse der Datensätze durch dieses Tool spart Zeit durch schnelle Verarbeitung, beschleunigte Entscheidungsfindung und effiziente Trenderkennung.",
          },
          {
            icon: <GrCluster size={40} />,
            headline: "Mustererkennung",
            description:
              "Die Visualisierungen ermöglichen das Erkennen von Mustern in großen Datensätzen, enthüllen Zusammenhänge und helfen bei präziser Vorhersage zukünftiger Entwicklungen.",
          },
          {
            icon: <FaMoneyBillAlt size={40} />,
            headline: "Kostenreduzierung",
            description:
              "Die schnelle Darstellung fördert Innovationen, unterstützt Forschungen und schafft ein dynamisches Ökosystem für kreative Ideen.",
          },
        ]}
      />
      <ContentSection
        content={<SecondSectionContnet />}
        image={{ src: CSVImage, alt: "Skateboard", isImageLeft: false }}
      />
    </ContentContainer>
  );
}
