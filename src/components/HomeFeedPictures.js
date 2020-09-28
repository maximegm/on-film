import cliffs from "../images/cliffs-s.jpg";
import cliffsm from "../images/cliffs-m.jpg";
import cliffsl from "../images/cliffs-l.jpg";
import cliffsxl from "../images/cliffs-xl.jpg";

import colombieres from "../images/colombiere-s.jpg";
import colombierem from "../images/colombiere-m.jpg";
import colombierel from "../images/colombiere-l.jpg";
import colombierexl from "../images/colombiere-xl.jpg";

import blueskys from "../images/blue-sky-s.jpg";
import blueskym from "../images/blue-sky-m.jpg";
import blueskyl from "../images/blue-sky-l.jpg";
import blueskyxl from "../images/blue-sky-xl.jpg";

import beachs from "../images/beach-s.jpg";
import beachm from "../images/beach-m.jpg";
import beachl from "../images/beach-l.jpg";
import beachxl from "../images/beach-xl.jpg";

import dunes from "../images/dunes-s.jpg";
import dunem from "../images/dunes-m.jpg";
import dunel from "../images/dunes-l.jpg";
import dunexl from "../images/dunes-xl.jpg";

import alpages from "../images/alpage-s.jpg";
import alpagem from "../images/alpage-m.jpg";
import alpagel from "../images/alpage-l.jpg";
import alpagexl from "../images/alpage-xl.jpg";

import glaciers from "../images/glacierfall-s.jpg";
import glacierm from "../images/glacierfall-m.jpg";
import glacierl from "../images/glacierfall-l.jpg";
import glacierxl from "../images/glacierfall-xl.jpg";

import hills from "../images/hills-s.jpg";
import hillm from "../images/hills-m.jpg";
import hilll from "../images/hills-l.jpg";
import hillxl from "../images/hills-xl.jpg";

import sunsets from "../images/sunset-s.jpg";
import sunsetm from "../images/sunset-m.jpg";
import sunsetl from "../images/sunset-l.jpg";
import sunsetxl from "../images/sunset-xl.jpg";

import passys from "../images/passy-s.jpg";
import passym from "../images/passy-m.jpg";
import passyl from "../images/passy-l.jpg";
import passyxl from "../images/passy-xl.jpg";

export const photos = [
  {
    src: cliffs,
    srcSet: [
      `${cliffs} 500w, ${cliffsm} 800w, ${cliffsl} 1024w, ${cliffsxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1,
  },
  {
    src: colombieres,
    srcSet: [
      `${colombieres} 500w, ${colombierem} 800w, ${colombierel} 1024w, ${colombierexl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 2,
    height: 3,
  },
  {
    src: blueskys,
    srcSet: [
      `${blueskys} 500w, ${blueskym} 800w, ${blueskyl} 1024w, ${blueskyxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1,
  },
  {
    src: beachs,
    srcSet: [
      `${beachs} 500w, ${beachm} 800w, ${beachl} 1024w, ${beachxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 2,
    height: 3,
  },
  {
    src: dunes,
    srcSet: [
      `${dunes} 500w, ${dunem} 800w, ${dunel} 1024w, ${dunexl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3,
  },
  {
    src: passys,
    srcSet: [
      `${passys} 500w, ${passym} 800w, ${passyl} 1024w, ${passyxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 4,
    height: 3,
  },
  {
    src: alpages,
    srcSet: [
      `${alpages} 500w, ${alpagem} 800w, ${alpagel} 1024w, ${alpagexl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1,
  },
  {
    src: glaciers,
    srcSet: [
      `${glaciers} 500w, ${glacierm} 800w, ${glacierl} 1024w, ${glacierxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 3,
    height: 4,
  },
  {
    src: sunsets,
    srcSet: [
      `${sunsets} 500w, ${sunsetm} 800w, ${sunsetl} 1024w, ${sunsetxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1,
  },
  {
    src: hills,
    srcSet: [
      `${hills} 500w, ${hillm} 800w, ${hilll} 1024w, ${hillxl} 1600w
          `,
    ],
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 2,
    height: 3,
  },
];
