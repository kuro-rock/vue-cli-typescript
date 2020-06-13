import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'

export interface ICounter {
  count: number
}

@Module({ dynamic: true, store, name: 'counter' })
export default class Counter extends VuexModule implements ICounter {
  public count = 0

  @Mutation
  private SET_INCREMENT(): void {
    this.count = this.count + 1
  }

  @Mutation
  private SET_DECREMENT(): void {
    console.log(this.count)
    this.count = this.count - 1
  }

  @Action({ rawError: true })
  public increment(): void {
    console.log(`this.GetExponentiationCount >>> ${this.exponentiationCount}`)
    this.SET_INCREMENT()
  }

  @Action({ rawError: true })
  public decrement(): void {
    this.SET_DECREMENT()
  }

  get exponentiationCount(): number {
    return Math.pow(this.count, 2)
  }
}

export const CounterModule = getModule(Counter)
