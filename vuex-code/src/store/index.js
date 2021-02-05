import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import ModulesA from "./modules/ModulesA"

const state={
  counter: 1000,
  students: [
    {id: 110, name: 'victory', age: 18},
    {id: 111, name: 'zhongzhong', age: 19},
    {id: 112, name: 'zz', age: 20},
    {id: 113, name: 'dapaitou', age: 21}
  ],
  info: {
    name: 'xzz',
    age: 18,
    height: 1.88
  }
}

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: ModulesA
  }
})

export default store