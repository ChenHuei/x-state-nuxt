import { Machine } from 'xstate'

export const toggleMachine = Machine({
  id: 'toggle',
  context: {},
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
})
