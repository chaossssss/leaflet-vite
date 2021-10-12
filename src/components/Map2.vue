<template>
  <div id="map2"></div>
</template>
<script>
export default {
  name: "Map2",
  mounted() {
    this.$nextTick(()=>{
      this.mapInit();
    })
  },
  methods: {
    mapInit() {

      var normalm1 = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
        maxZoom: 18,
        minZoom: 5
      });
      var normalm2 = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue', {
        maxZoom: 18,
        minZoom: 5
      });
      var normalm3 = L.tileLayer.chinaProvider('Geoq.Normal.Gray', {
        maxZoom: 18,
        minZoom: 5
      });
      var normalm4 = L.tileLayer.chinaProvider('Geoq.Normal.Warm', {
        maxZoom: 18,
        minZoom: 5
      });
      var normalm5 = L.tileLayer.chinaProvider('Geoq.Theme.Hydro', {
        maxZoom: 18,
        minZoom: 5
      });

      var normal = L.layerGroup([normalm1, normalm2, normalm3, normalm4, normalm5]);

      var baseLayers = {
        "地图": normalm1,
        "午夜蓝": normalm2,
        "灰色": normalm3,
        "暖色": normalm4,
        "水系": normalm5
      }

      var map = L.map("map2", {
        center: [31.59, 120.29],
        zoom: 12,
        layers: [normalm1],
        zoomControl: false
      });

      L.control.layers(baseLayers, null).addTo(map);
      L.control.zoom({
        zoomInTitle: '放大',
        zoomOutTitle: '缩小'
      }).addTo(map);
    },
  },
};
</script>
<style scoped lang="less">
#map2 {
  width: 800px;
  height: 600px;
}
</style>
