import { mdiHome, mdiViewList, mdiEmailOutline } from "@mdi/js";
const ITEMS = {
  // メニュー
  menuItems: [
    {
      name: "home",
      path: "/",
      icon: mdiHome,
    },
    {
      name: "list",
      path: "/list",
      icon: mdiViewList,
    },
    {
      name: "contact",
      path: "/contact",
      icon: mdiEmailOutline,
    },
  ],
};
export default (context, inject) => {
  inject("ITEMS", ITEMS);
};
