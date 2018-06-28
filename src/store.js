import Vue from 'vue'
import Vuex from 'vuex'
import { roomdatabase } from './firebase.js'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomdatabase,
    checkroom:'',
    roomFound:false
  },
  mutations: {
    checkData(state,roomList){
      state.checkroom = roomList
      console.log(state.checkroom)
    },
  },
  actions: {
    checkLobby({commit},newPlayerName){
      roomdatabase().once('value')
      .then(snapshot =>{
        let allLobby = snapshot.val()
        let LobbyFound = false
        for (let i in allLobby){
          if(!allLobby[i].Player2){
            roomdatabase(i).set({Player1:{Name:allLobby[i].Player1.Name, value: allLobby[i].Player1.value}, Player2:{Name:newPlayerName,value:50}})
            LobbyFound = true
          }
        }
        if(!LobbyFound){
          let timestamp = new Date()
          roomdatabase(timestamp.getTime()).set({Player1:{
            Name:newPlayerName,
            value:50
          }})
        }

      })
      .catch(error =>{
        console.log(error)
      })
    }
  }
})
