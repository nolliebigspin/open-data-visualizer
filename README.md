## Getting Started

Fist, install all dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### MapView

To enable Mapbox create an account at [https://www.mapbox.com/](https://www.mapbox.com/) and add your token to `.env` file.

## Abstract

This scientific work includes the development of a prototype that aims to simplify the visualisation of datasets from the Schleswig-Holstein Open Data Portal within a web browser. Of particular importance is the ability for users, even without specialised knowledge, to efficiently and satisfactorily interpret the information contained in these datasets.

A central aspect during the development phase is the creation of a suitable metadata model that can be attached to the datasets to generate visualisations from them. This work focuses on the CSV format for dataset files, which can be cleaned using various helper functions within the metadata. At the end of the development phase, the developed prototype will be tested and evaluated by a questionnaire including user tests. The results of this evaluation show that the application performs overall well, with an overall rating of 81.6 according to the „System Usability Scale“ (SUS).

In summary, this thesis shows that an application in this context makes sense. It succeeds in reducing the entry barrier to Open Data and its information content. A simplified possibility of visualisation and thus a lower entry barrier to the information content of different Open Data datasets is perceived by the users as suitable for use. Based on this positive impression, it can be concluded that a fully mature application in this area is likely to improve access to open data sets.