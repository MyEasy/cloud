const _routerService = [
  {
    path: 'fw',
    name: 'fw',
    meta: 'fw',
    component: () => import('@/page/service/fw/index.vue')
  },
  {
    path: 'ips',
    name: 'ips',
    meta: 'ips',
    component: () => import('@/page/service/ips/index.vue')
  },
  {
    path: 'av',
    name: 'av',
    meta: 'av',
    component: () => import('@/page/service/av/index.vue')
  },
  {
    path: 'lb',
    name: 'lb',
    meta: 'lb',
    component: () => import('@/page/service/lb/index.vue')
  },
  {
    path: 'nat',
    name: 'nat',
    meta: 'nat',
    component: () => import('@/page/service/nat/index.vue')
  },
  {
    path: 'vpn',
    name: 'vpn',
    meta: 'vpn',
    component: () => import('@/page/service/vpn/index.vue')
  },
  {
    path: 'ddos',
    name: 'ddos',
    meta: 'ddos',
    component: () => import('@/page/service/ddos/index.vue')
  },
  {
    path: 'waf',
    name: 'waf',
    meta: 'waf',
    component: () => import('@/page/service/waf/index.vue')
  },
  {
    path: 'monitor',
    name: 'monitor',
    meta: 'monitor',
    component: () => import('@/page/service/monitor/index.vue')
  },
  {
    path: 'leakscan',
    name: 'leakscan',
    meta: 'leakscan',
    component: () => import('@/page/service/leakscan/index.vue')
  },
  {
    path: 'nssa',
    name: 'nssa',
    meta: 'nssa',
    component: () => import('@/page/service/nssa/index.vue')
  },
  {
    path: 'operationalaudit',
    name: 'operationalaudit',
    meta: 'operationalaudit',
    component: () => import('@/page/service/operationalaudit/index.vue')
  },
  {
    path: 'dbaudit',
    name: 'dbaudit',
    meta: 'dbaudit',
    component: () => import('@/page/service/dbaudit/index.vue')
  }
]
export default _routerService
