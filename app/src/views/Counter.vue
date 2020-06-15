<template>
  <div class="Counter">
    <h1>This is an example page of vuex-module-decorators</h1>
    <div>
      <button @click="inc">
        inc
      </button>
      <button @click="dcr">
        dcr
      </button>
      <div>{{ count }} ^ 2 = {{ exponentiationCount }}</div>
    </div>
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
