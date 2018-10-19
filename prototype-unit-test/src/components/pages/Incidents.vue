<template>
  <div class="incidents">
    <h1>インシデント一覧</h1>
    <incident-data-table v-bind:incidents="incidents" />
  </div>
</template>

<script>
import IncidentDataTable from '@/components/pages/components/IncidentDataTable'
export default {
  data () {
    return {
      incidents: []
    }
  },
  components: {
    IncidentDataTable
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getIncidents()
    },
    getIncidents () {
      return this.$axios.get('incidents/')
        .then((response) => {
          // console.log(response)
          this.incidents = response.data
          return response
        })
        // .catch((err) => {
        //   // @ToDo we need error handling
        //   console.log('Error has oocured' + err)
        // })
    },
    getAlerts () {
      // alerts test
      return this.$axios.post('alerts/').then(res => {
        console.log(res)
        return res
      })
      // .catch(err => { console.log(err) })
    }
  }
}
</script>

<style scoped>
</style>
