<template>
    <div id="frames">
        <b-container class="frame-wrapper">
            <b-row v-if="checkLogin == false">
                <b-col md="2" offset="9">
                    <button class="btn btn-success" @click="showLoginModal">Login</button>
                    <button class="btn btn-success" @click="showRegistrationModal">Register</button>
                </b-col>
            </b-row>
            <b-row v-else-if="checkLogin == true">
                <b-col md="2" offset="10">
                    <b-button variant="success" @click="logout()">Logout</b-button>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="2" class="frame" v-for="(item,index) in this.getFrameList" :key="index" @click="showFrameDetails(item.id)"></b-col>
            </b-row>
        </b-container>

        <b-modal id="frame_detail_modal" no-close-on-backdrop v-model="showFrameModal" size="lg" :hide-footer="!checkLogin" ok-only ok-variant="primary" ok-title="Edit" @ok="showEditFrameModal(frame_details.id)" centered title="Frame" @hidden="resetFrameModal">
            <iframe width="700" height="315" :src="src_url" v-if='src_url != ""'>
            </iframe>
        </b-modal>

        <b-modal id="edit_frame_modal" no-close-on-backdrop v-model="showEditFrameModalStatus" size="lg" hide-footer centered title="Edit Frame" @hidden="resetEditFrameModal">

            <b-form method="post" @submit.prevent="editFrameProcess">
                <b-form-group id="frame-title-group" label="Title:" label-for="frame-title">
                    <b-form-input id="frame-title" type="text" placeholder="Enter Title" v-model="editframe_details.title"></b-form-input>
                    <div v-if="validationErrors.title" class="text-danger">{{ validationErrors.title[0] }}</div>
                </b-form-group>

                <b-form-group id="frame-file-group" label="File:" label-for="frame-file">
                    <b-form-file placeholder="Choose a file or drop it here..." @change="uploadFile"></b-form-file>
                    <div v-if="validationErrors.file" class="text-danger">{{ validationErrors.file[0] }}</div>
                </b-form-group>

                <b-form-group id="frame-icon-group" label="Icon:" label-for="frame-icon">
                    <b-form-file placeholder="Choose a file or drop it here..." @change="uploadIcon"></b-form-file>
                    <div v-if="validationErrors.icon" class="text-danger">{{ validationErrors.icon[0] }}</div>
                </b-form-group>

                <b-form-group id="frame-description-group" label="Description:" label-for="frame-description">
                    <b-form-textarea id="frame-description" v-model="editframe_details.description" placeholder="Enter something..." rows="3" max-rows="6"></b-form-textarea>
                    <div v-if="validationErrors.description" class="text-danger">{{ validationErrors.description[0] }}</div>
                </b-form-group>

                <b-button type="submit" variant="primary">Update</b-button>
            </b-form>

        </b-modal>

        <b-modal id="edit_frame_modal_not_auth" no-close-on-backdrop v-model="showEditFrameNotAuthModalStatus" size="lg" hide-footer centered title="Not Login">
            <h1>Please login to edit this details</h1>
        </b-modal>

        <b-modal id="login_modal" no-close-on-backdrop v-model="showLoginModalStatus" size="lg" hide-footer centered title="Login" @hidden="hideLoginModal">

            <b-form method="post" @submit.prevent="loginProcess">
                <b-form-group id="email-group" label="Email address:" label-for="email">
                    <b-form-input id="email" type="email" placeholder="Enter email" required v-model="user_details.email" ></b-form-input>
                    <div v-if="validationErrors.email" class="text-danger">{{ validationErrors.email[0] }}</div>
                </b-form-group>

                <b-form-group id="password-group" label="Password:" label-for="password">
                    <b-form-input id="password" type="password" placeholder="Enter password" required v-model="user_details.password" ></b-form-input>
                    <div v-if="validationErrors.password" class="text-danger">{{ validationErrors.password[0] }}</div>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

        </b-modal>

        <b-modal id="registration_modal" no-close-on-backdrop v-model="showRegisterModalStatus" size="lg" hide-footer centered title="Registration" @hidden="hideRegisterModal">

            <b-form method="post" @submit.prevent="registrationProcess">
                <b-form-group id="first-name-group" label="First Name:" label-for="first_name">
                    <b-form-input id="first_name" type="text" placeholder="Enter First Name" required v-model="user_details.first_name" ></b-form-input>
                    <div v-if="validationErrors.first_name" class="text-danger">{{ validationErrors.first_name[0] }}</div>
                </b-form-group>

                <b-form-group id="last-name-group" label="Last Name:" label-for="last_name">
                    <b-form-input id="last_name" type="text" placeholder="Enter Last Name" required v-model="user_details.last_name" ></b-form-input>
                    <div v-if="validationErrors.last_name" class="text-danger">{{ validationErrors.last_name[0] }}</div>
                </b-form-group>

                <b-form-group id="email-group" label="Email address:" label-for="email">
                    <b-form-input id="email" type="text" placeholder="Enter Email" required v-model="user_details.email" ></b-form-input>
                    <div v-if="validationErrors.email" class="text-danger">{{ validationErrors.email[0] }}</div>
                </b-form-group>

                <b-form-group id="gender-group" label="Gender">
                    <b-form-radio-group v-model="user_details.gender" required :options="getGenderOptions" ></b-form-radio-group>
                    <div v-if="validationErrors.gender" class="text-danger">{{ validationErrors.gender[0] }}</div>
                </b-form-group>

                <b-form-group id="country-group" label="Country">
                    <b-form-select v-model="user_details.country_code" required :options="getCountries"></b-form-select>
                    <div v-if="validationErrors.country_code" class="text-danger">{{ validationErrors.country_code[0] }}</div>
                </b-form-group>

                <b-form-group id="password-group" label="Password:" label-for="password">
                    <b-form-input id="password" type="password" placeholder="Enter Password" required v-model="user_details.password" ></b-form-input>
                    <div v-if="validationErrors.password" class="text-danger">{{ validationErrors.password[0] }}</div>
                </b-form-group>

                <b-form-group id="confirm-password-group" label="Confirm Password:" label-for="confirm_password">
                    <b-form-input id="confirm_password" type="password" placeholder="Enter Confirm Password" required v-model="user_details.c_password" ></b-form-input>
                    <div v-if="validationErrors.c_password" class="text-danger">{{ validationErrors.c_password[0] }}</div>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

        </b-modal>
    </div>
</template>

<script>
    export default {
        name:"Frames",
        data() {
            return {
                validationErrors:[],
                showFrameModal: false,
                src_url:"",
                showLoginModalStatus: false,
                showRegisterModalStatus: false,
                showEditFrameModalStatus: false,
                showEditFrameNotAuthModalStatus: false,
                user_details:{},
                frame_details:{},
                editframe_details:{},
            }
        },
        computed:{
            checkLogin(){
                return this.$store.state.auth.islogin;
            },
            getFrameList(){
                return this.$store.state.frame.framelist;
            },
            getCountries(){
                return this.$store.state.auth.countries;
            },
            getGenderOptions(){
                return this.$store.state.auth.gender_options;
            }
        },
        mounted() {
            console.log('Frame component mounted.')
            this.$store.dispatch("auth/check_user_login");
            this.$store.dispatch("frame/get_frame_list");
        },
        methods: {
            showFrameDetails(id){
                this.$store.dispatch("frame/get_single_frame",id).then((response) => {
                    if(response.data.success == true){
                        if(response.data.data != ""){
                            this.frame_details = response.data.data[0];
                            this.src_url = response.data.data[0].file;
                            this.showFrameModal = true;
                        }
                    }
                });
            },
            resetFrameModal(){
                this.showFrameModal = false;
                this.src_url = '';
                //this.frame_details = {};
            },
            logout(){
                this.$store.dispatch('auth/user_logout').then((response) => {
                    if(response.data.success == true){
                        localStorage.removeItem('userdetails');
                    }
                });
            },
            showLoginModal(){
                this.user_details = {};
                this.showLoginModalStatus = true;
            },
            loginProcess(){
                this.$store.dispatch('auth/user_login',this.user_details).then(response=>{
                    this.validationErrors = [];

                    if(response.data.success == true){

                        var userdetails = JSON.stringify({ islogin:true, login_user_token:response.data.data.token })
                        localStorage.setItem('userdetails', userdetails);
                        this.user_details = {};

                        this.hideLoginModal();
                        this.$store.dispatch('auth/check_user_login')

                    } else if(response.data.success == false){

                        if(response.data != "" && response.data.errors != ""){
                            this.validationErrors = response.data.errors;
                        }

                    }
                }).catch(error=>{
                    console.log(error);
                });
            },
            hideLoginModal(){
                this.user_details = {};
                this.showLoginModalStatus = false;
            },
            showRegistrationModal(){
                this.user_details = {};
                this.showRegisterModalStatus = true;
            },
            registrationProcess(){
                this.$store.dispatch('auth/user_register',this.user_details).then(response=>{
                    this.validationErrors = [];

                    if(response.data.success == true){

                        var userdetails = JSON.stringify({ islogin:true, login_user_token:response.data.data.token })
                        localStorage.setItem('userdetails', userdetails);
                        this.user_details = {};

                        this.hideRegisterModal();
                        this.$store.dispatch('auth/check_user_login')

                    } else if(response.data.success == false){
                        if(response.data != "" && response.data.errors != ""){
                            this.validationErrors = response.data.errors;
                        }
                    }
                }).catch(error=>{
                    console.log(error);
                });
            },
            hideRegisterModal(){
                this.user_details = {};
                this.showRegisterModalStatus = false;
            },
            showEditFrameModal(id){
                if(this.checkLogin == false){
                    this.showEditFrameNotAuthModalStatus = true;

                    setTimeout(function(){
                        this.showEditFrameNotAuthModalStatus = false;
                    }.bind(this), 5000);
                } else if(this.checkLogin == true){
                    this.$store.dispatch("frame/get_single_frame",id).then((response) => {
                        if(response.data.success == true){
                            this.editframe_details = {
                                'id': response.data.data[0].id,
                                'title': response.data.data[0].title,
                                'description': response.data.data[0].description
                            };
                            this.showEditFrameModalStatus = true;
                        }
                    });
                }
            },
            editFrameProcess(){

                const form = new FormData();
                form.append('id', this.editframe_details.id);
                form.append('title', this.editframe_details.title);
                form.append('description', this.editframe_details.description);
                form.append('file', this.editframe_details.file);
                form.append('icon', this.editframe_details.icon);

                this.$store.dispatch("frame/update_single_frame",form).then((response) => {
                    this.validationErrors = [];

                    if(response.data.success == true){
                        this.editframe_details = {};
                        this.showEditFrameModalStatus = false;
                    }else if(response.data.success == false){
                        if(response.data != "" && response.data.errors != ""){
                            this.validationErrors = response.data.errors;
                        }
                    }
                }).catch(error=>{
                    console.log(error);
                });
            },
            uploadFile(event) {
                const file = event.target.files[0];
                this.editframe_details.file = file;
            },
            uploadIcon(event) {
                const icon = event.target.files[0];
                this.editframe_details.icon = icon;
            },
            resetEditFrameModal(){
                this.editframe_details = {};
            }
        }
    }
</script>

<style>
    #frames{
        background: red;
        background: url('/public/images/wall.jpg') no-repeat;
        background-position: center;
    }

    .frame-wrapper{
        /*background: red;*/
        /*background: url('/public/images/bg.jpg') no-repeat;*/
        /*background-position: center;*/
        min-height: 800px;
    }

    .frame{
        border: 1px solid;
        height: 200px;
        margin: 10px;
        background: url('/public/images/image_150_150.jpg') no-repeat;
        background-position: center;
    }

    #frame_detail_modal .modal-body {
        text-align: center;
    }

    #frame_detail_modal .modal-body > iframe > img {
        text-align: center;
    }
</style>
