export default {
  // powerCounter(state) {
  //   return state.counter * state.counter
  // }
  more20stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  // more20stuLength(state) {
  //   return state.students.filter(s => s.age > 20).length
  // },
  //getters只是个名字他就是代表getters，其他名字也是代表getters
  more20stuLength(state,getters) {
    return getters.more20stu.length
  },
  moreAgeStu(state) {
    return function (age) {
      return state.students.filter(s => s.age > age)
    }
  },
  moreAgeStuJianTou: state => {
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}