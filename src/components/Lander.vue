<template>
    <v-app>
        <!-- lander section -->
        <v-layout align-center justify-center>
        <v-flex md10 sm12>
        <v-layout wrap>
            <v-flex md4>
                <sidebar class="fill-height" />
            </v-flex>
            <v-flex md8>
                <mainbar title="Bio">
                    <div class="intro">
                        I am a web developer interested in research, development and troubleshooting. 
                        I love coding and exploring cutting-edge technologies challenging me. 
                        Problem solving is one of my favourite hobbies which helps me with comping up noble ideas by using my initiative. 
                        I never rest on my laurels since computer science world is boudless. I majored in software engineering. 
                        I am currently working in Iranian Airport Company as software analyst. 
                        I have a broad spectrum of experience in DBMS, IOT, API, BPMS.
                        You can contact me by clicking on the link below.
                    </div>
                </mainbar>
                <v-spacer></v-spacer>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact Me</button>
                <mainbar v-if="skills" id="to-timeline" title="Skills">
                    <v-layout wrap>
                    <template v-for="(skill, index) in skills">
                        <v-flex v-if="skill.divider" :key="index" md12 xs12 mb-4/>
                        <v-flex v-else :key="index" md6 xs12>
                        <div class="mr-2 ml-2">
                            <div class="align-center">
                            <v-icon small>
                                {{ skill.icon }}
                            </v-icon>
                            {{ skill.title }}
                            </div>
                            <v-progress-linear class="progress" color="secondary" height="3" :value="skill.value"/>
                        </div>
                        </v-flex>
                    </template>
                    </v-layout>
                </mainbar>
            </v-flex>
        </v-layout>
        </v-flex>
        </v-layout>
        <!-- portfolio section -->
        <section class="protfolio" id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head text-md-center">
                                    <img class="rounded-circle img-custome" src="../assets/Education.jpg">
                                    <h2>Education</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <ul class="fa-ul">
                                        <li>
                                            <i class="fa-li fa fa-graduation-cap"></i>
                                            <div>
                                                <p>MSc in Software Engineering, 2020</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fa-li fa fa-graduation-cap"></i>
                                            <div>
                                                <p>BSc in Information Technology, 2012</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button type="button" class="btn btn-outline-secondary" v-on:click="redirect">More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head text-md-center">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/Experience.jpg">
                                    <h2>Experience</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <ul class="fa-ul">
                                        <li>
                                            <i class="fa-li fa fa-briefcase"></i>
                                            <div>
                                                <p>Software Development Analyst, IAC, 2015-now</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fa-li fa fa-briefcase"></i>
                                            <div>
                                                <p>Freelance Application Developer, 2013-2015</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <button type="button" class="btn btn-outline-secondary" v-on:click="redirect">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head text-md-center">
                                <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/Skills.png">
                                <h2>Skills</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <ul class="fa-ul">
                                    <li>
                                        <i class="fa-li fa fa-wrench"></i>
                                        <div>
                                            <p>Backend Programming</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fa-li fa fa-wrench"></i>
                                        <div>
                                            <p>Frontend Programming</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fa-li fa fa-wrench"></i>
                                        <div>
                                            <p>Data Base</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fa-li fa fa-wrench"></i>
                                        <div>
                                            <p>Documentation</p>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="fa-li fa fa-wrench"></i>
                                        <div>
                                            <p>Language</p>
                                        </div>
                                    </li>
                                </ul>
                                <button type="button" class="btn btn-outline-secondary" v-on:click="redirect">More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- modal for contact -->
        
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section>
        
    </v-app>
</template>

<script lang="ts">
import talk from './Contact.vue'
import sidebar from './Sidebar.vue'
import mainbar from './MainSections.vue'

export default {
    name:'Lander',
    components:{
        talk,sidebar,mainbar
    },
    data () {
            return {
                skills: [
                {
                    title: 'PHP',
                    icon : 'mdi-language-php',
                    value: 60,
                },
                {
                    title: 'JavaScript',
                    icon : 'mdi-language-javascript',
                    value: 60,
                },
                {
                    title: 'Python',
                    icon : 'mdi-language-python',
                    value: 80,
                },
                {
                    title: 'Vue.js',
                    icon : 'mdi-vuejs',
                    value: 60,
                },
                { divider: true },
                {
                    title: 'Ubuntu',
                    icon : 'mdi-ubuntu',
                    value: 80,
                },
                {
                    title: 'Database',
                    icon : 'mdi-database',
                    value: 90,
                },
                {
                    title: 'Git',
                    icon : 'mdi-git',
                    value: 70,
                },
                {
                    title: 'BusinessIntelligence',
                    icon : 'mdi-chart-bar',
                    value: 50,
                },
                { divider: true },
                {
                    title: 'C++',
                    icon : 'mdi-language-cpp',
                    value: 45,
                },
                {
                    title: 'Security',
                    icon : 'mdi-security',
                    value: 40,
                },]
            }
    },
    mounted(){
        this.$ga.page('/')
    },
    methods: {
      redirect() { 
        this.$router.push({name: 'Resume'})
      }
    }
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }
    .intro{
        font-size: larger;
    }
    .protfolio{
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
    .title {
        border-bottom: 2px #bfbfbf solid;
        line-height: 1.5 !important;
    }
    .progress {
        margin-top: 0.1rem;
    }

</style>