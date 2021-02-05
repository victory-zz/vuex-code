export default {
  state: {
    name: '张三'
  },
  mutations: {
    updateName(state,payload) {
      state.name=payload
    }
  },
  actions: {
    //这里的context.commit不再是store里面的mutations了，这里的context是modules里面的mutations
    // aUpdateName(context,payload) {
    //   console.log(context);
    //   setTimeout(() => {
    //     context.commit('updateName','王五');
    //   })
    // },
    aUpdateName({state,commit,rootState}) {
      setTimeout(() => {
        commit('updateName','王五');
      })
    }
  },
  getters: {
    fullName(state) {
      return  state.name + '111111'
    },
    //如果在fullName里面还需要用到getters，就加上getters这个参数，在使用它
    fullName1(state,getters) {
      return getters.fullName  + '22222'
    },
    //如果getters里面要使用store里面state的状态的话，还有一个叫做rootState的参数
    fullName2(state,getters,rootState) {
      return getters.fullName1 + rootState.counter
    }
  }
}