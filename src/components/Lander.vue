<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <div>
                    <img class="rounded-circle" src="../assets/Photo.jpg">
                    <h2>Software Development Analyst</h2>
                </div>
                <br >
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact Me</button>
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio" id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custome" src="../assets/Education.jpg">
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
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
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
                                    <button type="button" class="btn btn-outline-secondary">More</button>
                                </div>
                            </div>
                        <br>
                    </div>  

                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
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
                                <button type="button" class="btn btn-outline-secondary">More</button>
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
        
    </div>
</template>

<script lang="ts">
import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        talk
    },
    mounted(){
        this.$ga.page('/')
    }
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }

</style>