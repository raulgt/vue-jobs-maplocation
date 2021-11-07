<template>
  <div>
    <p>Google Maps</p>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";
// import {EventBus} from "../../../utils/event-bus";

export default {
  name: "LocationMap",
  props: {
    mapConfig: {
      type: Object,
      default: () => {},
    },
    apiKey: {
      type: String,
      default: "",
    },
    taskRow: {
      type: Number,
      default: 0,
    },
    tableTasks: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      google: null,
      map: null,
      currentMapMarkers: [], // array of added markers
      infoWindowsList: [], // array of added info windows on each marker,
      // Variables from external events
      tasks: [], // service tasks
      rowId: 0,
    };
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
    });
    this.google = googleMapApi;
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
    newMarker(latLng, map, title, id) {
     return new this.google.maps.Marker({
        id: id,
        position: latLng,
        map: map,
        title: title,
      });
    },
    buildInfoWindow(marker) {
      const contentInfoWindow = `<b style='font-weight:bold;'>${marker.title}</b><br>
                                 <b>Status: ${marker.status}</b><br>
                                 <b>Description: ${marker.description}</b><br>
                                 <b>Updated at: ${new Date(
                                   marker.updated_at
                                 ).toLocaleDateString()} - ${new Date(
        marker.updated_at
      ).toLocaleTimeString()}</b>
                                 <br>`;
      return contentInfoWindow;
    },
    setInfoWindow(contentInfoWindow, id) {
      return new this.google.maps.InfoWindow({
        content: contentInfoWindow,
        id: id,
      });
    },
    newLatLng(lat = 8.494105, lng = -69.12718) {
      return new this.google.maps.LatLng(lat, lng);
    },
    buildMarker(marker) {
      const myMarker = {
        title: marker.title,
        id: marker.id,
        lat: Number(marker.latitude),
        lng: Number(marker.longitude),
        status: marker.status,
        description: marker.description,
        updated_at: marker.updated_at,
      };
      return myMarker;
    },
    addLocalMarker(marker) {
      // The marker, positioned
      const latLng = new this.google.maps.LatLng(marker.lat, marker.lng);
      const newMarker = this.newMarker(latLng, this.map, marker.title, marker.id);
      // save all markers
      this.currentMapMarkers.push(newMarker);
      //build infoWindow
      const contentInfoWindow = this.buildInfoWindow(marker); 
      // set InfoWindow
      const infoWindow = this.setInfoWindow(contentInfoWindow, marker.id);
      // save all infoWindows with marker id
      this.infoWindowsList.push(infoWindow);   
      // Add marker click behaviour
      this.clickEventOnMarker(newMarker, infoWindow);
    },
    setMapMarkers(markers) {
      markers.map((marker) => {
        const mapMarker = this.buildMarker(marker);
        this.addLocalMarker(mapMarker);
      });
    },
    clickEventOnMarker(newMarker, infoWindow) {
      // Trigger an event on Click in a marker
      this.google.maps.event.addListener(newMarker, 'click', () => {
        this.infoWindowsList.forEach((infoW) => infoW.close());
        infoWindow.open(this.map, newMarker);   
        this.$emit('markerClick', newMarker.id);     
      });
    },
    openMarkerInfoByTableClick(id){
       const selectedMarker = this.currentMapMarkers.find((x) => x.id === id);
       const selectedInfoWindow = this.infoWindowsList.find((x) => x.id === id);
       this.infoWindowsList.forEach((infoW) => infoW.close());
       selectedInfoWindow.open(this.map, selectedMarker);
    }
  },
  watch: {
    taskRow: {
      handler: function (newVal) {
        // watch it   
        this.rowId = newVal;
        this.openMarkerInfoByTableClick(this.rowId);
      },
      deep: true,
    },
    tableTasks: {
      handler: function (newVal) {
        // watch it
        this.tasks = newVal;
        this.setMapMarkers(this.tasks);
      },
      deep: true,
    },
  },
};
</script>

<style  scoped>
.google-map {
  width: 100%;
  height: 820px;
}
</style>