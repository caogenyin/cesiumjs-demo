<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css';
// import Cesium from 'cesium/Cesium'
let Cesium = require('cesium/Cesium')

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    let viewer = new Cesium.Viewer("cesiumContainer");
    console.log(viewer);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
