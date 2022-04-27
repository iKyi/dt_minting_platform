import { ICollectionGridEntry } from "pages/CollectionsPage";
import immortalPic from "assets/mockData/mintImage.png";
import furryPic from "assets/mockData/furry.png";
import packImage from "assets/mockData/packPicture.png";
import cardPackEntry from "assets/mockData/cardPackEntry.png";

import { ICollectionEntryDataType } from "components/CollectionEntry/CollectionEntry";
import { IPackEntry } from "components/CollectionEntry/subcomponents/CollectionEntryBottomPacksPart";
import { IPackDetailDataType } from "components/PackEntry/PackEntryIndex";

export const mockCollectionItems: ICollectionGridEntry[] = [
  {
    id: "immortal-arena",
    image: immortalPic,
    name: "Immortal Arena",
  },
  {
    id: "furry-devils",
    image: furryPic,
    name: "Furry Devils",
  },
];

export const mockCollectionDataItems: ICollectionEntryDataType[] = [
  {
    id: "immortal-arena",
    image: immortalPic,
    name: "Immortal Arena",
    tags: ["doxxed", "gaming"],
    roadmap: "Roadmap text",
    teamMembers: [
      {
        name: "Johny test",
        title: "test",
        description: "text",
      },
    ],
    whitepaperUrl: "wwww.google.com",
    discord: "https://www.google.com",
    twitter: "https://www.google.com",
  },
  {
    id: "furry-devils",
    image: furryPic,
    name: "Furry Devils",
    tags: ["doxxed", "gaming"],
    roadmap: "Roadmap text",
    teamMembers: [
      {
        name: "Johny test",
        title: "test",
        description: "text",
      },
    ],
    whitepaperUrl: "wwww.google.com",
    siteUrl: "https://www.google.com",
    twitter: "https://www.google.com",
  },
];

export const mockPackListingItems: IPackEntry[] = [
  {
    id: "pack-one",
    image: packImage,
  },
  {
    id: "pack-2",
    image: packImage,
  },
  {
    id: "pack-3",
    image: packImage,
  },
  {
    id: "pack-4",
    image: packImage,
  },
];

export const mockCardDataEntriesOne: IPackDetailDataType = {
  id: "pack-one",
  collectionName: "Immortal Arena",
  collectionId: "immortal-arena",
  cards: [
    {
      image: cardPackEntry,
      mintId: "111",
      name: "Card one",
      status: "claimed",
    },
    {
      image: cardPackEntry,
      mintId: "222",
      name: "Card Two",
      status: "unclaimed",
    },
  ],
};
