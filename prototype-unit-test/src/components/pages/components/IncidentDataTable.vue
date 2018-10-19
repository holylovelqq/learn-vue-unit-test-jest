<template>
  <div class="incident-data-table">
    <el-table
      :data="incidents"
      :default-sort = "{prop: 'id', order: 'ascending'}"
      border
      empty-text = "No Data"
      style="width: 100%">
      <el-table-column
        class="eltablecolum"
        prop="id"
        label="ID"
        sortable
        width="80">
      </el-table-column>
      <el-table-column
        class="eltablecolum"
        prop="title"
        label="タイトル"
        sortable
        width="">
        <template slot-scope="scope">
          <el-button @click="goIncidentDetail(scope.row.id)" type="text">{{ scope.row.title }}</el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="affected_to"
        label="影響アプリケーション"
        sortable
        width="240">
      </el-table-column> -->
      <el-table-column
        class="eltablecolum"
        :formatter='formatOccurred_at'
        prop="occurred_at"
        label="発生日時"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        class="eltablecolum"
        prop="assigned_to"
        label="担当者"
        sortable
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'incident-data-table',
  props: {
    incidents: Array
  },
  methods: {
    goIncidentDetail: function (incidentId) {
      this.$router.push({
        name: 'IncidentDetail',
        params: {
          id: incidentId
        }
      })
    },
    formatOccurred_at: function (date) {
      return this.formatDatetime(date.occurred_at)
    },
    formatDatetime: function (date) {
      var m = this.$moment.utc(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      // タイムゾーンは分で指定する
      // 日本：9*60=54min
      // https://stackoverflow.com/questions/32878197/updating-time-offset-with-moment-utcoffset
      return m.utcOffset(0).format('YYYY/MM/DD HH:mm')
    }
  }
}
</script>
