<template>
    <div>
        <heading class="mb-6">Museum</heading>
        <div class="container">
            <div class="row">

                <div class="frame col" v-for="(item,index) in frameList" :key="index">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-content">
                        <img :src="item.icon" />
                    </div>
                    <div class="div-operations text-left pl-6 align-middle">
                        <div class="inline-flex items-center">
                            <span class="inline-flex">
                                <a :href="generateViewUrl(item.id)" class="cursor-pointer text-90 hover:text-primary mr-3 inline-flex items-center has-tooltip" data-testid="frames-items-0-view-button" dusk="2-view-button" data-original-title="null">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 16" aria-labelledby="view" role="presentation" class="fill-current"><path d="M16.56 13.66a8 8 0 0 1-11.32 0L.3 8.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95-.01.01zm-9.9-1.42a6 6 0 0 0 8.48 0L19.38 8l-4.24-4.24a6 6 0 0 0-8.48 0L2.4 8l4.25 4.24h.01zM10.9 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></svg>
                                </a>
                            </span>
                                            <span class="inline-flex">
                                <a :href="generateEditUrl(item.id)" class="edit_frame_url cursor-pointer text-90 hover:text-primary mr-3 inline-flex items-center has-tooltip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="edit" role="presentation" class="fill-current"><path d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"></path></svg>
                                </a>
                            </span>

                            <button :data-testid="generateDeleteUrl(index)" dusk="2-delete-button" class="inline-flex appearance-none cursor-pointer text-90 hover:text-primary mr-3 has-tooltip" data-original-title="null" @click="deleteProcessModalOpen(item.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="delete" role="presentation" class="fill-current"><path fill-rule="nonzero" d="M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

            <div class="modal select-none fixed pin z-50 overflow-x-hidden overflow-y-auto" v-show="deleteModalStatus">
                <div class="relative mx-auto flex justify-center z-20 py-view"><div>
                <form class="bg-white rounded-lg shadow-lg overflow-hidden" style="width: 460px;">
                    <div class="p-8">
                        <h2 class="mb-6 text-90 font-normal text-xl">Delete Resource</h2>
                        <p class="text-80 leading-normal">Are you sure you want to delete the selected resources?</p>
                    </div>
                    <div class="bg-30 px-6 py-3 flex">
                        <div class="ml-auto">
                            <button @click="cancelDelete()" type="button" data-testid="cancel-button" dusk="cancel-delete-button" class="btn text-80 font-normal h-9 px-3 mr-3 btn-link">Cancel</button>
                            <button @click="confirmDelete()" id="confirm-delete-button" data-testid="confirm-button" type="button" class="btn btn-default btn-danger"><span class="">Delete</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            frameList: [],
            deleteModalStatus:false,
            deleteId:""
        }
    },
    metaInfo() {
        return {
          title: 'Museum',
        }
    },
    components:{
    },
    mounted() {
        this.getFrameList();
    },
    methods:{
        getFrameList(){
            axios.get('http://localhost:8000/api/frames')
            .then(res=>{
                this.frameList = res.data.data;
            }).catch(err=>{
                console.log(err);
            });
        },
        generateEditUrl(item_id){
            return `resources/frames/${item_id}/edit?viaResource&viaResourceId&viaRelationship`;
        },
        generateViewUrl(item_id){
            return `resources/frames/${item_id}`;
        },
        generateDeleteUrl(item_id){
            //return `${item_id}-delete-button`;
            return `frames-items-${item_id}-delete-button`;
        },
        deleteProcessModalOpen(item_id){
            this.deleteModalStatus = true;
            this.deleteId = item_id;
        },
        cancelDelete(){
            this.deleteModalStatus = false;
        },
        confirmDelete(){
            axios.delete(`/nova-api/frames?search=&trashed=&viaResource=&viaResourceId=&viaRelationship=&resources[]=${this.deleteId}`,{
                headers:{
                    "Content-Type" : "application/json"
                }
            }).then(res=>{
                this.getFrameList();
                this.deleteModalStatus = false;
                console.log(res);
            }).catch(err=>{
                console.log(err);
            });
        }
    }
}
</script>

<style>
    .frame{
        border: 1px solid;
        height: 200px;
        margin: 10px;
        background-position: center;
        width: 13.66%;
        display: inline-block;
        position: relative;
        margin-bottom: 30px;
    }
    .edit_frame_url{
        text-decoration: none;
        color:var(--90);
    }
    .div-operations{
        //padding-top: 0.05rem;
        //position: absolute;
        //bottom: -26px;
        //border: 1px solid;
        //width: 100%;
        text-align: center;
    }
    .item-title{
        text-align: center;
        padding: 10px;
        padding-bottom: 0;
    }
    .item-content{
        padding: 18px;
    }
    .item-content img{
        width: 100px;
        height: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
