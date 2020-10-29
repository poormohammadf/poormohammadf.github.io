<template>
  <div id="app">
    <navigation/>
    <router-view></router-view>
    <Footer/>
    
  </div>
</template>

<script>
import Navigation from './components/includes/nav.vue'
import Footer from './components/includes/footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  //insert the following code for vue-meta to work
  metaInfo() {
        return { 
            title: "Fatemeh Poormohammad - Tech Savvy",
            meta: [
                { name: 'description', content:  'poormohammadf - I enjoy coding and exploring new tech area'},
                { property: 'og:title', content: "poormohammadf - Software Developement Analyst"},
                { property: 'og:site_name', content: 'poormohammadf'},
                { property: 'og:type', content: 'profile'},
                { property: 'og:url', content: 'https://poormohammadf.github.io/#/' + this.userData.username},    
                { name: 'robots', content: 'index,follow'} 
            ]
        }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
