<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>
      |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
    <button @click="inc">
      inc
    </button>
    <button @click="dcr">
      dcr
    </button>
    <div>{{ count }} ^ 2 = {{ exponentiationCount }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CounterModule } from '@/store/modules/counter'

@Component
export default class App extends Vue {
  private inc(): void {
    CounterModule.increment()
  }
  private dcr(): void {
    console.log('dec')
    CounterModule.decrement()
  }

  private get count(): number {
    return CounterModule.count
  }

  private get exponentiationCount(): number {
    return CounterModule.exponentiationCount
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
