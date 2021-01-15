<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css'
// import Cesium from 'cesium/Cesium'
let Cesium = require('cesium/Cesium')

export default {
  name: 'HelloWorld',
  mounted() {
    Cesium.Ion.defaultAccessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1MjI2YmUxZS1hZmU1LTQ2MWQtOTRlMS0wMWYxNWJhZGJiNDYiLCJpZCI6MjIwODgsInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODEzMDMwMzR9.-azBnRdzc5TSP-E3oyRVNeTCKDWEQRqpXlnrpfWS0jw'
    let viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: false,
      infoBox: false,
      timeline: false,
      navigationHelpButton: false,
      // sceneModePicker: false, // 场景模式
      // SceneMode: Cesium.SceneMode.SCENE2D,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'https://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&scale=1&x={x}&y={y}&z={z}' // 谷歌电子地图
        // url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}' // 高德电子地图
      }) // 图像图层提供者，仅baseLayerPicker设为false有意义
      // terrainProvider: Cesium.createWorldTerrain() // 地形
    })

    let scene = viewer.scene

    // scene.globe.enableLighting = true

    // 移除默认图层
    // viewer.imageryLayers.remove(viewer.imageryLayers.get(0))

    // 谷歌卫星影像
    // viewer.imageryLayers.addImageryProvider(
    //   new Cesium.UrlTemplateImageryProvider({
    //     url: 'https://mt3.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&scale=1&x={x}&y={y}&z={z}'
    //   })
    // )

    // 设置相机
    // Create an initial camera view
    /* let initialPosition = new Cesium.Cartesian3.fromDegrees(120.619585, 31.299379, 5000)
    let initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(0, -90, 0)
    let homeCameraView = {
      destination: initialPosition,
      orientation: {
        heading: initialOrientation.heading,
        pitch: initialOrientation.pitch,
        roll: initialOrientation.roll
      }
    }
    // Set the initial view
    scene.camera.setView(homeCameraView) */

    // 禁止用户倾斜相机
    // scene.screenSpaceCameraController.enableTilt = false

    // hone按钮动作
    // Add some camera flight animation options
    /* homeCameraView.duration = 2.0
    homeCameraView.maximumHeight = 2000
    homeCameraView.pitchAdjustHeight = 2000
    homeCameraView.endTransform = Cesium.Matrix4.IDENTITY
    // Override the default home button
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function(e) {
      e.cancel = true
      scene.camera.flyTo(homeCameraView)
    }) */

    // Load Cesium World Terrain
    // viewer.terrainProvider = Cesium.createWorldTerrain({
    //   requestWaterMask: true, // required for water effects
    //   requestVertexNormals: true // required for terrain lighting
    // })

    // 加载3D模型
    /* let modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(120.619585, 31.299379, 0))
    let model = scene.primitives.add(
      Cesium.Model.fromGltf({
        // url: './SampleData/models/CesiumAir/Cesium_Air.glb',
        url: './SampleData/models/test.gltf',
        modelMatrix: modelMatrix,
        scale: 5000
      })
    )
    console.log(model) */

    // 倾斜摄影
    let tileset = scene.primitives.add(
      new Cesium.Cesium3DTileset({
        // url: 'http://192.168.10.156/SampleData/Cesium3DTiles/Classification/Photogrammetry/tileset.json'
        url: Cesium.IonResource.fromAssetId(69380)
      })
    )
    console.log(tileset)
    viewer.zoomTo(tileset).otherwise(function(error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
#cesiumContainer {
  height: 100%;
}
</style>
