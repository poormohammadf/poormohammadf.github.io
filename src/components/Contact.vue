<template>
    <div>
        <div class="container" style="padding:10%">
            <h2>Contact Me</h2>
            <form  method="post" @submit.prevent="submit" enctype="text/plain">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="contact.eamil" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="contact.name" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="contact.message" rows="3" placeholder="write message"></textarea>
                </div>
            </form>
            
            <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
        </div>
    </div>
</template>
<script src="https://s.pageclip.co/v1/pageclip.js" charset="utf-8"></script>
<script lang="ts">
import axios from 'axios';
export default {
    data(){
        return {
            contact:{
                email:'',
                name:'',
                message:''
            }
        }
    },
    
    methods:{
        submit(){
            if(this.contact.eamil !="" && this.contact.name != "" && this.contact.message != ""){
                axios.post('https://send.pageclip.co/YEtLDqCxDLN4ET2pwsPd2HPTvPfgamID',{         
                from: this.emailMsg,          
                _subject: `${this.contact.name} | Friendly Message from Github Page`,
                message: this.contact.message,},
                ).then((response) => {
                    this.contact.name = '';
                    this.contact.eamil = '';
                    this.contact.message = '';
                    this.$router.push({ path: '/' }); 
                    console.log(response);     
                }).catch((error) => { 
                    alert(error);      
                });
            }else{
                alert("All fields are required");
            }
        }
    }
}


</script>