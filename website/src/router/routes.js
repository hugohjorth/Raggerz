
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'produkter', component: () => import('pages/produkter.vue') },
      { path: 'staff', component: () => import('pages/staff.vue') },
      { path: 'info', component: () => import('pages/info.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
