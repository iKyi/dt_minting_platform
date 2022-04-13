import AboutUsIcon from "components/Icons/AboutUsIcon";
import ChipIcon from "components/Icons/ChipIcon";
import CollectionsIcon from "components/Icons/CollectionsIcon";
import HomeIcon from "components/Icons/HomeIcon";
import LaunchpadIcon from "components/Icons/LanchpadIcon";
import NftsIcon from "components/Icons/NftsIcon";
import StarIcon from "components/Icons/StarIcon";

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
    url: "/nfts/",
    icon: NftsIcon,
    disabled: true,
  },
  {
    title: "About us",
    url: "/about-us/",
    icon: AboutUsIcon,
    disabled: true,
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
