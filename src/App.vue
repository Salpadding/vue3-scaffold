<template>
  <div>
    <h1>{{ title }}</h1>
    <img src="@/assets/img/favicon.ico"  alt="favicon"/>
  </div>
</template>
<script lang="ts">
import { Vue, Options} from "vue-class-component"

@Options({
  name: 'App'
})
export default class App extends Vue{
  title: '标题2'

  // 组件方法也可以直接声明为实例的方法
  onClick(): void {
    window.alert(this.title);
  }
};
</script>