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
            let duplicateCity = true
            for(let i=0;i<state.todos.length;i++){
                if(state.todos[i]===this.newTodo){
                    duplicateCity=false
                    break
                }
            }
            if(duplicateCity == true)
            {
            state.todos.push({newTodo})
            }
        },
        removeTodo(state, todo) {
			state.todos.splice(state.todos.indexOf(todo), 1)
		}
    }
})