import {INCREMENT} from "./mutations-types";


export default {
  //定义方法
  //  increament()这里默认回传回state参数
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  additions(state,payload) {
    //用另一种方式提交时，参数为对象，这里用payload更好
    state.counter+=payload.counter
  },
  addStu(state,stus) {
    state.students.push(stus)
  },
  updateInfo(state,payload) {
    state.info.name='kobe'
    // state.info['address']='洛杉矶'
    // Vue.set(state.info,'address','洛杉矶')
    state.info={...state.info,'address': '洛杉矶'}
    //不能在mutations进行异步操作
    //   setTimeout(() => {
    //     // state.info.name='kobe'
    //     Vue.set(state.info,'name','kobe')
    //     state.info={...state.info,'address': '洛杉矶'}
    //   },1000)
  }
}