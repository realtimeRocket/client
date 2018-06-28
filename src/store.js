import Vue from 'vue'
import Vuex from 'vuex'
import { roomdatabase } from './firebase.js'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomdatabase,
    checkroom:'',
    playerName:'',
    roomName:'',
    statusGame:'',
    gameState:''
  },
  mutations: {
    checkData(state,roomList){
      state.checkroom = roomList
      console.log(state.checkroom)
    },
    stateGameName(state,playerName){
      state.playerName = playerName
    },
    roomGameName(state,roomName){
      state.roomName = roomName
    },
    status(state,status){
      console.log(status)
      state.statusGame = status
    },
    nowGameState(state,status){
      state.gameState = status
    }
  },
  actions: {
    checkLobby({commit},newPlayerName){
      roomdatabase().once('value')
      .then(snapshot =>{
        let allLobby = snapshot.val()
        let LobbyFound = false
        for (let i in allLobby){
          if(!allLobby[i].Player2){
            roomdatabase(i).set({Player1:{Name:allLobby[i].Player1.Name}, Player2:{Name:newPlayerName},gameState:'ready',value:550})
            LobbyFound = true   
            commit('nowGameState','ready')         
            commit('status','Player2')
            commit('stateGameName',newPlayerName)
            commit('roomGameName',roomName)
            console.log('masuk sini')
          }
        }
        if(!LobbyFound){
          let timestamp = new Date()
          timestamp = timestamp.getTime()
          commit('stateGameName',newPlayerName)
          commit('roomGameName',timestamp)
          commit('status','Player1')
          commit('nowGameState','not ready')
          roomdatabase(timestamp).set({Player1:{
            Name:newPlayerName,
          },gameState:'not ready'})
          roomdatabase(timestamp).on('value',function(snapshot){
            console.log(snapshot.val())
          })
        }
      })
      .catch(error =>{
        console.log(error)
      })
    }
  }
})
