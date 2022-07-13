<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <Bran/>

  </div>
</template>

<script>
import ListContainer from "./ListContainer/index.vue"
import Recommend from "./Recommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Bran from "./Bran"

import {mapState} from 'vuex'



export default {
  name:"Home",
  components:{
    ListContainer,Recommend,Rank,Like,Floor,Bran
  },
  computed:{
      ...mapState({floorList:(state)=>{
        return state.home.floorList
      }})
  },mounted(){
    this.$store.dispatch("getFloorList");
  }
}
</script>

<style>

</style>