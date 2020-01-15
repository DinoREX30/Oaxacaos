<template>
  <div class="home">
    <GmapMap v-bind:center="{lat: currentLocation.lat, lng: currentLocation.lng}"
          :zoom="17"
          map-type-id="terrain"
      class="google-map" 
      @click="selectLocation"     
          style="height: 600px">
        <GmapMarker v-bind:key="index" v-for="(m, index) in
        markers" v-bind:position="m.position"
        v-bind:clickable="true" color="black"></GmapMarker>
    </GmapMap>
     <div class="geolocation" v-on:click="geolocation()">
  </div>
   </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      currentLocation: { lat: 0, lng: 0 },
      center: { lat: 17.0678581, lng: -96.7077327 },
      markers: [
      ]
    }
  },
  mounted () {
    this.geolocation()
  },
  methods: {
    geolocation () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    selectLocation (map) {
      this.markers = [{
        position: map.latLng
      }]
    }
  }
}
</script>
