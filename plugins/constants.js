const ITEMS = {
  // メニュー
  menuItems: [
    {
      name: "home",
      path: "/",
      icon: "mdi-home"
    },
    {
      name: "list",
      path: "/list",
      icon: "mdi-view-list"
    },
    {
      name: "contact",
      path: "/contact",
      icon: "mdi-email-outline"
    }
  ]
};
export default (context, inject) => {
  inject("ITEMS", ITEMS);
};
