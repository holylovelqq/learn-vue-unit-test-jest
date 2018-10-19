import { shallowMount, createLocalVue } from '@vue/test-utils'
import elementUI from 'element-ui'
import moment from 'moment'
import IncidentDataTable from '@/components/pages/components/IncidentDataTable'

let $router = []
const localVue = createLocalVue()
localVue.use(elementUI)

localVue.prototype.$moment = moment

describe('IncidentDataTable.vue', () => {
  let incidents = [
    {
      'assigned_to': '山田太郎',
      'id': 1,
      'occurred_at': '2018-10-16T02:30:42.362000Z',
      'title': 'もんだい1'
    },
    {
      'assigned_to': '山田太郎2',
      'id': 2,
      'occurred_at': '2018-10-16T02:30:42.362000Z',
      'title': 'もんだい2'
    },
    {
      'assigned_to': '山田太郎3',
      'id': 3,
      'occurred_at': '2018-10-16T02:30:42.362000Z',
      'title': 'もんだい3'
    }
  ]
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(IncidentDataTable, {
      propsData: {incidents},
      localVue,
      mocks: {
        $router
      }
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })
  it('IncidentDataTable DOM test', () => {
    expect(wrapper.is(IncidentDataTable)).toBeTruthy()
    expect(wrapper.find('.incident-data-table').exists()).toBe(true)
    expect(wrapper.findAll('.eltablecolum')).toHaveLength(4)
  })
  it('IncidentDataTable function test', () => {
    expect(wrapper.vm.formatOccurred_at({'occurred_at': '2018-10-16T02:30:42.362000Z'})).toBe('2018/10/16 02:30')
    wrapper.vm.$router = []
    const $r = [
      {
        name: 'IncidentDetail',
        params: {
          id: 5
        }
      }
    ]
    wrapper.vm.goIncidentDetail(5)
    expect(wrapper.vm.$router).toEqual($r)
  })

  it('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
