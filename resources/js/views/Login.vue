<template>
    <div id="login-page">
        <b-container>
            <b-row>
                <b-col md="8">
                    <b-alert :variant="alertVariant" v-model="showAlert" v-text="alertMessage"></b-alert>

                    <b-form method="post" @submit.prevent="loginProcess">
                        <b-form-group id="email-group" label="Email address:" label-for="email">
                            <b-form-input id="email" type="email" placeholder="Enter email" v-model="user_details.email" ></b-form-input>
                            <div v-if="validationErrors.email" class="text-danger">{{ validationErrors.email[0] }}</div>
                        </b-form-group>

                        <b-form-group id="password-group" label="Password:" label-for="password">
                            <b-form-input id="password" type="password" placeholder="Enter password" v-model="user_details.password" ></b-form-input>
                            <div v-if="validationErrors.password" class="text-danger">{{ validationErrors.password[0] }}</div>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
    export default {
        name:"Login",
        data() {
            return {
                validationErrors:[],
                showAlert:false,
                alertMessage:"",
                alertVariant:"",
                user_details:{}
            }
        },
        mounted() {
            console.log('login component mounted.')
        },
        methods: {
            loginProcess(){
                this.$store.dispatch('auth/user_login',this.user_details).then(response=>{
                    this.validationErrors = [];

                    if(response.data.success == true){

                        if(response.data.message != "") {
                            this.alertVariant = "success";
                            this.alertMessage = response.data.message;
                            this.showAlert = true;
                        }

                        var userdetails = JSON.stringify({ islogin:true, login_user_token:response.data.data.token })
                        localStorage.setItem('userdetails', userdetails);
                        this.user_details = {};

                        setTimeout(function(){
                            this.alertVariant = "";
                            this.alertMessage = "";
                            this.showAlert = false;
                            this.$router.push({ name:'Frames' });
                        }.bind(this), 5000);

                    } else if(response.data.success == false){

                        if(response.data != "" && response.data.errors != ""){
                            this.validationErrors = response.data.errors;
                        }

                        if(response.data.message != ""){
                            this.alertVariant = "danger";
                            this.alertMessage = response.data.message;
                            this.showAlert = true;
                        }

                        setTimeout(function(){
                            this.alertVariant = "";
                            this.alertMessage = "";
                            this.showAlert = false;
                        }.bind(this), 5000);
                    }
                }).catch(error=>{
                    console.log(error);
                });
            }
        }
    }
</script>
