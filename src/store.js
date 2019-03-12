import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    activeUser: {},
    rejected: false
  },
  mutations: {
    setActiveUser(state, user){
      state.activeUser = user;
    },
    toggleRejected(state){
      state.rejected = !state.rejected;
    }
  },
  actions: {
    async login(ctx, loginData){
      
      try {
        
        // post username + password to /auth, receive auth token  

        // Set token in session storage

        // update activeUser for UI ( ex. "Greger is logged in." )

      } catch(err) {

          ctx.commit('toggleRejected');
        setTimeout(()=>{
          ctx.commit('toggleRejected');
        }, 1000)

        console.error(err);      
      }
    },
    checkAuth(ctx){

      // Check if auth key is in session

    }
  }
})
