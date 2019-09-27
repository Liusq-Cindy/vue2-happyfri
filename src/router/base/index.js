
const arr = [
  {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score')
  },
  {
    path: '/item',
    component: () =>
      import(/* webpackChunkName: "third.error" */ './page/item/index.vue')
  }
];
export default arr;