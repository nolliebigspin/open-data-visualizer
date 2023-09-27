import Line from "@/assets/images/LineChartExample.png";
import Map from "@/assets/images/MapExample.png";
import Pie from "@/assets/images/PieChartExample.png";
import TabNavigation from "@/components/TabNavigation";
import TabContent from "@/components/TabContent";
import PieChartContentPre from "@/content/visualization-types/pie/PieChartContentPre.mdx";
import PieChartContentPost from "@/content/visualization-types/pie/PieChartContentPost.mdx";
import MapContentPre from "@/content/visualization-types/map/MapContentPre.mdx";
import MapContentPost from "@/content/visualization-types/map/MapContentPost.mdx";
import LineChartContentPre from "@/content/visualization-types/line/LineChartContentPre.mdx";
import LineChartContentPost from "@/content/visualization-types/line/LineChartContentPost.mdx";
import ContentContainer from "@/components/ContentContainer";

export default function VisualizationTypesRoot() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ContentContainer className="mb-8 text-center">
        <div className="text-h1 font-bold">
          Verschiedene Visualisierungstypen
        </div>
        <div>
          Hier werden die verfügbaren Visualisierungsmöglichkeiten dieser
          Anwendung einmal aufgeführt. Dabei wird jeweils ein kleiner Überblick
          gegeben und die Vor- und Nachteile aufgelistet. Zum wechseln der
          verschiedenen Modelle der Übersicht kann einfach die grüne
          Tabnavigation genutzt werden.
        </div>
      </ContentContainer>
      <TabNavigation
        tabs={[
          {
            title: "Tortendiagramm",
            content: (
              <TabContent
                contentPre={<PieChartContentPre />}
                image={{ src: Pie, alt: "Pi-Chart" }}
                prosAndCons={{
                  pros: [
                    "Klarer Proportionalvergleich",
                    "Einfache Kommunikation",
                    "Hervorhebung von dominierenden Anteilen",
                  ],
                  cons: [
                    "Schlechte Lesbarkeit bei vielen Kategorien",
                    "Schwierigkeiten bei kleinen Unterschieden",
                    "Fehlende Informationen",
                    "Ungeeignet für zeitliche Entwicklungen",
                  ],
                }}
                contentPost={<PieChartContentPost />}
              />
            ),
          },
          {
            title: "Liniendiagramm",
            content: (
              <TabContent
                contentPre={<LineChartContentPre />}
                image={{ src: Line, alt: "Pi-Chart" }}
                prosAndCons={{
                  pros: [
                    "Trendvisualisierung",
                    "Detaillierte Datenverläufe",
                    "Vergleich von mehreren Variablen",
                    "Erfassung von Schwankungen",
                  ],
                  cons: [
                    "Komplexität bei vielen Datenpunkten",
                    "Überbetonung von Trends",
                    "Fehlende Kategorien",
                    "Mögliche Irreführung",
                  ],
                }}
                contentPost={<LineChartContentPost />}
              />
            ),
          },
          {
            title: "Kartenansicht",
            content: (
              <TabContent
                contentPre={<MapContentPre />}
                image={{ src: Map, alt: "Pi-Chart" }}
                prosAndCons={{
                  pros: [
                    "Geografischer Kontext",
                    "Effektive Kommunikation",
                    "Entdeckung von Zusammenhängen",
                  ],
                  cons: [
                    "Überlagerung von Informationen",
                    "Verzerrung durch Kartenauswahl",
                    "Fehlende Detailtiefe",
                    "Erfordert geografische Daten",
                  ],
                }}
                contentPost={<MapContentPost />}
              />
            ),
          },
        ]}
      />
    </main>
  );
}
