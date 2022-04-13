import mintMockImage from "assets/mockData/mintImage.png";
import furryMockImage from "assets/mockData/furry.png";
import immortalOne from "assets/mockData/immortalTeam/1.png";
import immortalTwo from "assets/mockData/immortalTeam/2.png";
import immortalThree from "assets/mockData/immortalTeam/3.png";
import immortalFour from "assets/mockData/immortalTeam/4.png";

import { IMintDataType } from "components/Pages/Launchpad/FeaturedMintEntry";
const futureDate = "2022-12-12T21:18:08+0000";

const futureMints: IMintDataType[] = [
  {
    id: "immortal_arena",
    name: "IMMORTAL ARENA",
    description:
      "Immortal Arena is a play to earn NFT digital card game, developed on the Solana blockchain",
    supply: 5555,
    mintPrice: 1,
    releaseDate: futureDate,
    discord: "https://wwww.google.com",
    released: false,
    siteUrl: "https://wwww.google.com",
    twitter: "https://wwww.google.net",
    image: mintMockImage,
    tags: ["DOXXED", "GAMING"],
    whitepaperUrl:
      "https://immortalarena.io/Immortal_Arena_whitepaper_0.1_3.pdf",
    teamMembers: [
      {
        name: "Ishiki Arata",
        title: "Project manager",
        description:
          "Ishiki Arata is an artist and front-end software developer, with experience in project management, he founded WAX Arena on the WAX Blockchain, which later became Immortal Arena.",
        img: immortalOne,
      },
      {
        name: "Robert Lazar",
        description:
          "Robert Lazar is a self-taught multidisciplinary artist and designer based in Bucharest, Romania. Robert has specialized in blending 3D visuals with music. He uses his art to express emotions and create immersive digital experiences on the metaverse.",
        title: "Illustrator and Graphic Design Lead",
        img: immortalTwo,
      },
      {
        name: "Valkin Petkov",
        description:
          "Vaklin is born and raised in the city of Burgas, Bulgaria. He brings to the table an extensive background of organizational experience (over 7 years) which he accrued in his position as a manager in one of the world's biggest IT companies, IBM.",
        img: immortalThree,
        title: "Project Assistant",
      },
      {
        name: "Alex Griciuc",
        title: "Software Architect and Lead Developer",
        description:
          "Alex has over fifteen years of experience working as a software engineer and technical lead focusing on building and shipping cloud-based projects. He has focused much of his attention in recent years on blockchain development and the dApps phenomenon",
        img: immortalFour,
      },
    ],
    roadmap: `Immortal Arena is a play to earn NFT digital card game, developed on the Solana blockchain. Players can build card decks of up to 50 cards, including three special "Commander" cards, which they can use to fight against AI in PvE or duel other players in PvP mode.

    Players can earn IMOS (Immortal Arena's game token) and other Immortal Arena NFTs while playing both PvE and duels PvP which they can use to enhance their deck's strength or sell for profit.
        
    Cards from Immortal Arena are divided into 9 separate groups - 8 different factions and a factionless group. All these factions were created by the original 4 races in the Immortal Arena universe: Human, Robot, Unliving and Alien. Humans split into The Awakened Ones and Dark Prophecy, Robots split into Ikarus Guard and Alpha Company, Unliving split into The Kult and Berserkers, and Aliens split into Emperors of Huracan and Nyx Legion. 
        
    Rebels from each of these races that did not want to take part in any of the other factions, and are mostly on their own, are called Factionless.`,
  },
  {
    id: "little_furry_devils",
    name: "Little Furry Devils",
    image: furryMockImage,
    releaseDate: null,
    description:
      "The first CGI Movie with NFT Actors. Pioneering a new era of entertainment and forging a new world of audience-controlled entertainment by leveraging NFTs.",
    mintPrice: 1,
    supply: 4444,
    discord: "https://www.google.com",
  },
];

export default futureMints;
