
  const ITEMS = {
    // メニュー
  menuItems: [
    {
      name: 'home',
      path: '/',
      icon: 'mdi-home',
    },
    {
      name: 'puroducts',
      path: '/products',
      icon: 'mdi-application',
    },
    {
      name: 'contact',
      path: '/contact',
      icon: 'mdi-email-outline',
    },
  ]
}
export default (context, inject) => {
  inject('ITEMS', ITEMS)
}
