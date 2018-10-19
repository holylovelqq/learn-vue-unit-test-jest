<template>
  <div class="incident-detail">
    <header>
      <div class="">#{{ incidentDetail.id }}</div>
      <h1>{{ incidentDetail.title }}</h1>
    </header>
    <main>
      <table cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr>
            <th>発生日時</th>
            <td>{{ this.formatOccured_at(incidentDetail.occurred_at) }}</td>
            <th>担当者</th>
            <td>{{ incidentDetail.assigned_to }}</td>
          </tr>
          <!-- <tr>
            <th>影響アプリケーション</th>
            <td>{{ incidentDetail.affected_to }}</td>
            <th></th>
            <td></td>
          </tr> -->
        </tbody>
      </table>
      <div>
        <h4>説明</h4>
        <pre>{{ incidentDetail.details }}</pre>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  created () {
    this.init()
  },
  data () {
    return {
      incidentDetail: {}
    }
  },
  methods: {
    init () {
      this.getIncidentDetail(this.$route.params.id)
    },
    getIncidentDetail (incidentId) {
      return this.$axios.get('incidents/' + incidentId)
        .then((response) => {
          // @ToDo we need error handling for 404, 503 etc...
          this.incidentDetail = response.data
          // console.log(response)
          return response
        })
        // .catch(err => {
        //   // @ToDo we need error handling for TCP connection error
        //   console.log('Error has oocured' + err)
        // })
    },
    formatOccured_at (date) {
      var m = this.$moment.utc(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      return m.utcOffset(0).format('YYYY/MM/DD HH:mm')
    }
  }
}
</script>

<style scoped>
h1 {
  margin-top: 0;
}
table {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  width: 100%;
  max-width: 1000px;
}
th, td {
  text-align: left;
  border-bottom: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
  padding: 0.5em;
  width: 25%;
}
</style>
