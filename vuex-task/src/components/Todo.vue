<template>
    <div class="todo">
      <h1>{{msg}}</h1>
        <a href="/">Home</a>
           <div class="dropdown">
                <span>City:</span>
                <select  class="form-control drop" v-on:change="cityChange()" v-model="select">
                    <option value="">Select a City</option>
                    <option v-for="city in todos" v-bind:value="city.newTodo">{{city.newTodo}}</option>
                </select>
            </div>
            <!--<select class="cityDropDown" v-model="select" @change="cityChange()">
                   <option v-for="city in todos" :value="city.newTodo">
                           {{city.newTodo}}
                </option>
              </select>-->
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">temp_min</th>
      <th scope="col">temp_max</th>
      <th scope="col">humidity</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(cit,index) in cities.list" v-if="index%8 === 0" >
        <td>{{cit.dt_txt}}</td>
        <td>{{tempCalculation(cit.main.temp_min)}}</td>
        <td>{{tempCalculation(cit.main.temp_max)}}</td>
        <td>{{cit.main.humidity}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import store from './store'
import router from 'vue-router'
import Vue from 'vue'

export default{
    name:'Todo',
    data () {
        return{
            msg:'todo application',
            //select:"select",
            select:this.$route.params.id,
            cities:[]
        }
    },
    computed: {
       todos(){
          return this.$store.state.todos
       } 
   },
   created(){
       alert(this.select)
       Vue.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.select+',IN&appid=1c407f68b72190cff18512e643ceac0e').then(res=>{this.cities=res.data;console.log(this.cities)})
   },
   methods:{
       cityChange(){
           //console.log(this.$route.params.id)
           //this.$router.push('/Todo/'+ this.select)
           //console.log(this.select)
           Vue.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.select+',IN&appid=1c407f68b72190cff18512e643ceac0e').then(res=>{this.cities=res.data;console.log(this.cities)})
       },
       tempCalculation(arg){
           let dataTemp = arg;
           dataTemp = dataTemp-273.
           dataTemp = dataTemp.toFixed(2)
           return dataTemp
       }
   }
}
</script>
<style>
.drop{width:300px !important;margin-left:540px !important;}
.table{width:800px !important;margin-top:20px;margin-left:300px;}
</style>