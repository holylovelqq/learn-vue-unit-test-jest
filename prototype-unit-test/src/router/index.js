import Vue from 'vue'
import Router from 'vue-router'
import Incidents from '@/components/pages/Incidents'
import IncidentDetail from '@/components/pages/IncidentDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Incidents'
      }
    },
    {
      path: '/incidents/:id',
      name: 'IncidentDetail',
      component: IncidentDetail
    },
    {
      path: '/incidents',
      name: 'Incidents',
      component: Incidents
    }
  ]
})
