import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        todos:[]
        // places: ["New Delhi", "Mumbai", "Bangalore", "Chennai"]
    },
    mutations:{
        addTodo(state,newTodo){
            state.todos.push({newTodo})
        },
        removeTodo(state, todo) {
			state.todos.splice(state.todos.indexOf(todo), 1)
		}
    }
})