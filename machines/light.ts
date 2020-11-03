import { Machine } from 'xstate'

export const lightMachine = Machine({
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        CLICK: 'orange',
      },
    },
    orange: {
      on: {
        CLICK: 'red',
      },
    },
    red: {
      on: {
        CLICK: 'green',
      },
    },
  },
})
