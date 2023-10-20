Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'museum',
      path: '/museum',
      component: require('./components/Tool'),
    },
  ])
})
