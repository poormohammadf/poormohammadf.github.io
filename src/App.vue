<template>
  <v-app id='app'>
    <Header/>
    <v-main> 
      <router-view></router-view>      
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/includes/header.vue'
import Footer from './components/includes/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
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
                { property: 'og:url', content: 'https://poormohammadf.github.io/#/'},    
                { name: 'robots', content: 'index,follow'} 
            ]
        }
  }
};
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