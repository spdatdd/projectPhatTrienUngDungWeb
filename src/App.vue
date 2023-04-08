<template>
  <!-- Header -->
  <div 
  className="w3-center w3-padding-32 w3-light-grey w3-card"
  >
    <h1><i><b>Trang đăng ký chỗ ở ký túc xá CTU</b></i></h1>
  </div>
  <Navigation></Navigation>
  <router-view/>
  <!-- Footer -->
  <div 
  className="w3-card w3-margin-top w3-center w3-padding w3-blue w3-hover-grey"
  >
    <b><i>Copyright</i></b> &copy; 2023
  </div>
</template>



<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation,
},

  data(){
    return {}
  },
  
  methods: {

  }
}
</script>