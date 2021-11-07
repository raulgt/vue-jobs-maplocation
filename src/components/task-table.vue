<template>
  <div class="table-responsive">
    <p>Map Tasks</p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="header in gridColumns" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" :key="entry" @click="clickTableRow(entry.id)" :style="{'background-color': entry.id === clickedRow ? highlightedRow: '' }">
          <td v-for="key in columns" :key="key">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
</template>

<script>
import { tasksLocationService } from "../shared/tasks-locations.service";
import { format } from "date-fns";
import { displayDateFormat } from "../shared/constants";
import{ tableSelecteRow } from '../assets/colors/table-tasks';

export default {
  name: "TaskTable",
  data() {
    return {
      searchQuery: "",
      gridColumns: ["Id", "Title", "Status", "Assigned to", "Created at"],
      columns: ["id", "title", "status", "assigned_to", "created_at"],
      data: [],
      //   gridData: gridData,
      startRow: 0,
      rowsPerPage: 10,
      taskDetailDtoOutput: {
        id: 0,
        title: "",
        description: "",
        latitude: "",
        longitude: "",
        image: "",
        date: "",
        status: "",
        assigned_to: "",
        created_at: "",
        updated_at: "",
      },
      taskDtoOut: {
        current_page: 0,
        data: [],
        total: 0,
        last_page: 0,
        per_page: 0,
      },   
      clickedRow: 0,
      highlightedRow: tableSelecteRow,
    };
  },
  props: {
    tasks: {
      type: Object,
      default: () => {},
    },
    markerId:{
       type: Number,
      default: 0,
    }
  },
  async created() {
    await this.getCurrentTasks();
  },
  methods: {
    async getCurrentTasks() {
      this.taskDtoOut = await tasksLocationService.getTasks();
      if (this.taskDtoOut?.data.length > 0) {
        this.data = this.taskDtoOut.data;
        this.data.map((v) => (v.created_at = this.shortDate(v.created_at)));     
        this.$emit('tasksArray', this.data);
      }
    },
    shortDate: function (value) {
      return value ? format(new Date(value), displayDateFormat) : "";
    },
    selectRowByMarkerId(id){
       this.clickedRow = id;
    },
    clickTableRow(id){    
     this.clickedRow = id;     
     this.$emit('clickedRow', this.clickedRow)
    }
  },
  watch: {
    markerId: {
       handler: function (newVal) {
        // watch it       
        this.selectRowByMarkerId(newVal);     
      },
      deep: true,
    }
  },
};
</script>

<style  scoped>
tbody > tr {
  line-height: 30px;
  min-height: 30px;
  height: 30px;
}
</style>