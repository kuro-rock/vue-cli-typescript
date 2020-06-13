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
  private SET_COUNT(count: number): void {
    this.count = count
  }

  @Action
  public increment(): void {
    this.SET_COUNT(this.getCount() + 1)
  }

  @Action
  public decrement(): void {
    this.SET_COUNT(this.getCount() - 1)
  }

  public getCount(): number {
    return this.count
  }
}

export const CounterModule = getModule(Counter)
