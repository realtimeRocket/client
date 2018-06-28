<template>
    <div>
        <input type="text" v-model="hahahahaha">
        <button @click="methodbaru()">tes</button>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    data(){
        return{
            hahahahaha:'',
        }
    },
    created(){
    },
    methods:{
        ...mapActions([
            'checkLobby',
        ]),
        methodbaru:function(){
            this.$store.dispatch('checkLobby',this.hahahahaha)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
