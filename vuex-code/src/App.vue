<template>
  <div id="app">
    <h1>---------modules的内容---------</h1>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">添加名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName1}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <br>




    <h1>---------info的内容是否是响应式的---------</h1>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">添加信息</button>
    <br>


    <h1>---------App内容---------</h1>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="additions(5)">+5</button>
    <button @click="addStu">添加学生</button>

    <br>
    <h1>-----------App内容:Getters相关信息------------</h1>
<!--    <h2>{{$store.getters.powerCounter}}</h2>-->
    <h2>{{$store.getters.more20stu}}</h2>
<!--    <h2>{{$store.getters.more20stu.length}}</h2>-->
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h3>年龄大于19的，这里的age是可以给调用者指定的age，并不是写死的</h3>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>
    <h3>箭头函数写法</h3>
    <h2>{{$store.getters.moreAgeStuJianTou(19)}}</h2>

    <br>
    <h1>-----------HelloVuex内容------------</h1>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  //只有export default导出的时候，才能像下面这样写
  import HelloVuex from "./components/HelloVuex";
//  否则采用下列的方式
  import {
    INCREMENT
  } from "./store/mutations-types";

  export default {
  name: 'App',
  data() {
    return {
      message: '我是App组件',
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    additions(counter) {
      //1.普通方法
      // this.$store.commit('additions',counter)
      //2.另一种风格，包含type属性的对象
      this.$store.commit({
        type: 'additions',
        counter
      })
    },
    addStu() {
      const stu={id: 114, name: 'he', age: 28}
      this.$store.commit('addStu',stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo',{
      //   message: '我是有信息的',
      //   success() {
      //     console.log('成功修改信息');
      //   }
      // })
      this.$store.dispatch('aUpdateInfo','我是携带信息的').then(res => {
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updateName() {
      this.$store.commit('updateName','李四')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  // computed: {
  //   getGreaterAgescount(){
  //       return this.$store.state.students.filter(age => age >= 20).length
  //   }
  // }
}
</script>

<style>

</style>
