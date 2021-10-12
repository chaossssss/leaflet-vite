<template>
  <div id="map"></div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {};
  },
  mounted() {
    this.mapInit()
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




      var map = L.map("map",{
        layers: [normalm2],
      }).setView([120.755625,30.746631], 14);
      var positron = L.tileLayer(
        "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        {}
      ).addTo(map);
      L.control.layers(baseLayers, null).addTo(map);
      // L.marker([51.5, -0.09]).addTo(map).bindPopup("嘉善县").openPopup();
      L.marker([30.830898,120.92585]).addTo(map).bindPopup("嘉善县").openPopup();

      var data = [
        {
          from: [120.92585,30.830898],
          to: [120.755625,30.746631],
          labels: ["嘉善县", "嘉兴市"],
          color: "#ff3a31",
        },
      ];

      var migrationLayer = new L.migrationLayer({
        map: map,
        data: data,
        pulseRadius: 30,
        pulseBorderWidth: 3,
        arcWidth: 1,
        arcLabel: true,
        arcLabelFont: "10px sans-serif",
      });
      migrationLayer.addTo(map);
    },
  },
};
</script>
<style scoped lang="less">
#map {
  width: 1000px;
  height: 800px;
}
</style>
