import { Machine, assign } from 'xstate'
import { Context } from '@/types/counter'

const increment = (context: Context) => context.count + 1
const decrement = (context: Context) => context.count - 1

const isNotMax = (context: Context) => context.count < 10
const isNotMin = (context: Context) => context.count >= 0

export const counterMachine = Machine({
  initial: 'active',
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: {
          actions: assign({ count: increment }),
          cond: isNotMax,
        },
        DEC: {
          actions: assign({ count: decrement }),
          cond: isNotMin,
        },
      },
    },
  },
})
