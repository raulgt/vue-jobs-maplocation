<template>
  <div class="card-group">
    <div class="card m-l-5 m-t-5">
      <div class="card-body">
        <LocationMap   
        :apiKey = "googleKey"
        :mapConfig = "mapConf"
        :taskRow = "currentTaskRow"  
        :tableTasks = "currentTasks" 
        @markerClick = "clickOnMarker"     
        />
      </div>
    </div>
    <div class="card m-r-5 m-l-5 m-t-5">
      <div class="card-body">
        <TaskTable  
        @clickedRow = "selectRowMarker"  
        @tasksArray = "tasksLocal"
        :markerId = "markerClickedId"
        />       
      </div>
    </div>
  </div>
</template>

<script>


import LocationMap from '../components/location-map.vue';
import TaskTable from '../components/task-table.vue';
import { googleMapKey } from '../assets/api-keys/google-map';
import { defaultMapLocation } from '../configurations/constants';

export default {
  name: "Home",  
  components: {
    LocationMap,
    TaskTable,
  },
  data() {
    return {  
      // entries for LocationMap
      currentTaskRow: 0,   
      currentTasks:[],   
      googleKey: googleMapKey,
      mapConf: {
         center: defaultMapLocation,
         zoom: 7
      }, 
         // entry for taskTable
      markerClickedId:0,
    };
  },
  methods: {
    selectRowMarker(id) {       
      this.currentTaskRow = id;               
    },
    tasksLocal(tasks){      
      this.currentTasks = tasks;         
    },
    clickOnMarker(id){
      this.markerClickedId = id;
    }

  },

};
</script>
