import AboutUsIcon from "components/Icons/AboutUsIcon";
import ChipIcon from "components/Icons/ChipIcon";
import CollectionsIcon from "components/Icons/CollectionsIcon";
import ConsoleIcon from "components/Icons/ConsoleIcon";
import HomeIcon from "components/Icons/HomeIcon";
import KnobsIcon from "components/Icons/KnobsIcon";
import LaunchpadIcon from "components/Icons/LanchpadIcon";
import NftsIcon from "components/Icons/NftsIcon";
import StarIcon from "components/Icons/StarIcon";
import SuitcaseIcon from "components/Icons/SuitcaseIcon";

export interface INavMenuItem {
  title: string;
  url?: string;
  category?: string;
  icon?: any;
  disabled?: boolean;
  comingSoon?: boolean;
}

const navMenuItems: INavMenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Collections",
    disabled: true,
    icon: CollectionsIcon,
  },
  {
    title: "Launchpad",
    url: "/launchpad/",
    icon: LaunchpadIcon,
  },
  {
    title: "NFTs",
    icon: NftsIcon,
    url: "https://staking.darkterminal.io/",
  },
  {
    title: "About us",
    url: "/about-us/",
    icon: AboutUsIcon,
    disabled: true,
  },
  {
    category: "Games",
    title: "Binary Hack",
    url: "https://games.darkterminal.io/",
    icon: ConsoleIcon,
  },
  {
    category: "Games",
    title: "Hack The System",
    url: "https://games.darkterminal.io/",
    icon: ConsoleIcon,
  },
  {
    category: "Games",
    title: "Trinity Hack",
    url: "https://games.darkterminal.io/",
    icon: ConsoleIcon,
  },
  {
    category: "Games",
    title: "Operations",
    disabled: true,
    icon: SuitcaseIcon,
  },
  {
    category: "Jobs",
    title: "Projects",
    url: "/projects",
    icon: StarIcon,
    disabled: true,
  },
  {
    category: "Jobs",
    title: "Developers",
    url: "/developers",
    icon: ChipIcon,
    disabled: true,
  },
  {
    category: "Minting Services",
    title: "Pack Minting",
    disabled: true,
    icon: KnobsIcon,
  },
  {
    category: "Minting Services",
    title: "Blending",
    disabled: true,
    icon: KnobsIcon,
  },
  {
    category: "Minting Services",
    title: "Generative",
    disabled: true,
    icon: KnobsIcon,
  },
  {
    category: "Partnerships",
    title: "Immortal Arena",
    disabled: true,
    icon: StarIcon,
  },
  {
    category: "Partnerships",
    title: "Perseus",
    disabled: true,
    icon: StarIcon,
  },
];

const getMeuItemsCategories = () => {
  const categories: Record<string, INavMenuItem[]> = {};
  categories["Navigation"] = [];
  navMenuItems.forEach((item) => {
    if (!item.category) {
      categories["Navigation"].push(item);
      return;
    }
    if (!categories[item.category]) {
      categories[item.category] = [];
      categories[item.category].push(item);
      return;
    } else {
      categories[item.category].push(item);
      return;
    }
  });
  return categories;
};

export const MenuItemsCategories = getMeuItemsCategories();

export default navMenuItems;
