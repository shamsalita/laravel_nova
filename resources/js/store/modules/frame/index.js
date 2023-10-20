import axiosapi from '../../../axiosapi';

const state = {
    framelist:[]
};

// getters
const getters = {

};

// actions
const actions = {
    get_frame_list(context){
        return new Promise((resolve,reject)=>{
            axiosapi.get('/frames',{},{}).then(response=>{
                context.commit('GET_ALL_FRAME',response.data.data);
                resolve({ message:response.data.message, success:response.data.success });
            }).catch(error=>{
                reject(error);
            })
        });
    },
    get_single_frame(context,id){
        return new Promise((resolve,reject)=>{
            axiosapi.get(`/frames/show?id=${id}`,{},{}).then(response=>{
                resolve(response);
            }).catch(error=>{
                reject(error);
            })
        });
    },
    update_single_frame(context,frameDetails){
        return new Promise((resolve,reject)=>{
            axiosapi.post(`/frames/update`,frameDetails,{
                headers:{
                    "Access-Control-Allow-Origin" : "*",
                    "Content-Type" : "multipart/form-data",
                    "Authorization" : `Bearer ${context.rootState.auth.login_user_token}`
                }
            }).then(response=>{
                resolve(response);
            }).catch(error=>{
                reject(error);
            })
        });
    }
};

// mutations
const mutations = {
    GET_ALL_FRAME(state,framelist){
        state.framelist = framelist
    },
};

export default {
    namespaced: true,
    name: 'frame',
    state,
    getters,
    actions,
    mutations
}
