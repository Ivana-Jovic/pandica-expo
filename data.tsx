export interface animalInfo {
  name: string;
  image: string;
  description: string;
  comments: string[];
}
const des: string =
  "       Naćin života: usamljenici, aktivni i danju i noću; imaju odlićan njuh;" +
  "kada love, satima slede žrtvu, ili je ćekaju u zasedi." +
  "Ishrana: mala jelenska divljać, koze, ovce, zećevi, ptice. " +
  "Dužina: 90–150 centimetara (sa repom)" +
  "Težina: 18–38 kilograma." +
  "Razmnožavanje: graviditet traje nešto duže od dva meseca; ženka u maju" +
  "ili junu rađa 2–4 slepa mlada; progledaju posle dve nedelje, a uz" +
  "majku ostaju dok ne navrše prvu godinu. " +
  "Životni vek: 16–18 godina. Ris je najveća evropska maćka. U stanju je" +
  " da ulovi životinju koja je ćetiri puta krupnija od njega.";
export const animals2: animalInfo[] = [
  {
    name: "Sumski ris",
    image: require("./assets/images/sumskiris.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  {
    name: "Merkat",
    image: require("./assets/images/merkat.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  {
    name: "Koala",
    image: require("./assets/images/koala.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  {
    name: "Zebra",
    image: require("./assets/images/zebra.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  {
    name: "Azijski lav",
    image: require("./assets/images/azijskilav.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  {
    name: "Azijski slon",
    image: require("./assets/images/azijskislon.jpg"),
    description: des,
    comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  },
  // {
  //   name: "Orangutan",
  //   image: "/images/orangutan.jpg",
  //   description: des,
  //   comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  // },
  // {
  //   name: "Zirafa",
  //   image: "/images/zirafa.jpg",
  //   description: des,
  //   comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  // },
  // {
  //   name: "Gorila",
  //   image: "/images/gorila.jpg",
  //   description: des,
  //   comments: ["Ivana:Ovo je komentar 1", "Ana:Ovo je komentar 2"],
  // },
  // {
  //   name: "Nosorog",
  //   image: "/images/nosorog.jpg",
  //   description: des,
  //   comments: [],
  // },
];
export interface eventInfo {
  title: string;
  description: string;
  image: string;
  likes: number;
  whoLiked: string[];
}
export const events: eventInfo[] = [
  {
    title: "Mazoala noću",
    description:
      "Noću u prašumi: Nije strašno, ali u sanjivoj atmosferij i uz odličnu hranu - to je 'Masoala noću', nova ponuda za nezaboravno veče u zoološkom vrtu.",
    likes: 1,
    image: require("./assets/images/events/masoala.jpg"),
    whoLiked: ["ivana"],
  },
  {
    title: "Hranjenje žirafa",
    description:
      "Uz pomoć profesionalaca i volontera saznaj zanimljivosti o ovim životinjama, dok ih hraniš. Celokupna zarada od ulaznica za hranjenje biće donirana projektu za žirafe u Keniji.",
    likes: 1,
    image: require("./assets/images/events/giraffenfuetterung.jpg"),
    whoLiked: ["a"],
  },
  {
    title: "Parada pingvina",
    description:
      "Ukoliko temperatura padne ispod 10stepeni zimi, u periodu od novembra do februara moguće je videti paradu pingvina svako jutro. Jedinstveno iskustvo koje se ne propušta!",
    likes: 0,
    image: require("./assets/images/events/pinguinParada.jpg"),
    whoLiked: [],
  },
  {
    title: "Akvarijum",
    description:
      "Ovaj dogadjaj je idealan za decu školskog urasta. Deca se takmiče ko može da uoči više različitih vrsta riba, a pobednik dobija besplatnu ulaznicu za sledeću posetu.",
    likes: 0,
    image: require("./assets/images/events/aquarium.jpg"),
    whoLiked: [],
  },
  {
    title: "Plivanje slonova",
    description:
      "Svake nedelje, ponedeljkom, ne propustite da vidite božanstveno kupanje slonova. Ovaj dogadjaj je pogodan za odrasle i decu svih uzrasta.",
    likes: 0,
    image: require("./assets/images/events/elephantsswimming.jpg"),
    whoLiked: [],
  },
  {
    title: "Hranjenje slepih miševa",
    description:
      "Hranjenje se odvija svaki drugi vikend u 2 časa. Pored hranjenja, moći ćete da čujete priču o ovim  neverovatnim životinjama. Nemojte propustiti ovaj doživljaj.",
    likes: 0,
    image: require("./assets/images/events/batfeeding.jpg"),
    whoLiked: [],
  },
];
export interface userInfo {
  firstName: string;
  lastName: string;
  telephone: string;
  adress: string;
  username: string;
  password: string;
  notifications: string[];
}
export const users: userInfo[] = [
  {
    firstName: "admin",
    lastName: "admin",
    telephone: "123",
    adress: "admin",
    username: "admin",
    password: "123",
    notifications: ["n1", "n2"],
  },
  {
    firstName: "Ivana",
    lastName: "Jovic",
    telephone: "065123456",
    adress: "Makenzijeva 3",
    username: "iki",
    password: "123",
    notifications: ["notifikacija 1", "notifikacija 2"],
  },
];
