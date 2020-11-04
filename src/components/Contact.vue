<template>
    <div>
        <div class="container" style="padding:10%">
            <h2>Contact Me</h2>
            <form  method="post" v-on:submit.prevent="submit" enctype="text/plain">
                <div class="success" v-if="contact.successful"> 
                    <b-alert variant="success" show>Delivered Successfully</b-alert>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" v-model="contact.eamil" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="contact.name" placeholder="Enter name">
                </div>
                <div class="form-group">
                    <textarea class="form-control" v-model="contact.message" rows="3" placeholder="Write message"></textarea>
                </div>
            </form>
            
            <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios';
export default {
    data(){
        return {
            contact:{
                email:'',
                name:'',
                message:'',
                successful: false
            }
        }
    },
    
    methods:{
        submit(){
            if(this.contact.eamil !="" && this.contact.name != "" && this.contact.message != ""){
                axios.post('https://formspree.io/xwkrgrvy',{         
                _replyto: this.contact.eamil,          
                _subject: `${this.contact.name}'s Message from Github Page`,
                message: this.contact.message}
                ).then((response) => {
                    this.contact.successful = true;
                    this.contact.name = '';
                    this.contact.eamil = '';
                    this.contact.message = '';
                    this.$router.push({ path: '/' }).catch(()=>{});  
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