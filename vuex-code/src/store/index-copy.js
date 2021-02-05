import Vue from 'vue'
import Vuex from  'vuex'
import {INCREMENT} from "./mutations-types";

//1.安装插件,一旦我们是用use，那么底层就去执行底层的install方法
Vue.use(Vuex)

//2.创建一个对象
const ModuleA={
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


const store=new Vuex.Store({
  state:{
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
  },
  mutations: {
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
  },
  actions: {
    // context:上下文
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // },
    aUpdateInfo(context,payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);

          resolve('111111')
        },1000)
      })
    }
  },
  getters: {
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
  },
  modules: {
    a: ModuleA
  }
})

//3.导出store共享
export default store