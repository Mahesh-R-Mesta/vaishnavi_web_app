import {
  faBoxes,
  faClockRotateLeft,
  faList,
  faShop,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";

const drawerItems = [
  {
    title: "DashBoard",
    route: "/admin/dashboard",
    icon: faDashboard,
  },
  {
    title: "Inventory",
    route: "/admin/inventory",
    icon: faList,
  },
  {
    title: "Orders",
    route: "/admin/order",
    icon: faFirstOrder,
  },
  {
    title: "Products",
    route: "/admin/products",
    icon: faBoxes,
  },
  {
    title: "History",
    route: "/admin/history",
    icon: faClockRotateLeft,
  },
  {
    title: "Shops",
    route: "/admin/shops",
    icon: faShop,
  },
];

export default drawerItems;
