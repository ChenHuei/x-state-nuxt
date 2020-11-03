import { Machine } from 'xstate';

// This machine is completely decoupled from Vue
export const toggleMachine = Machine({
  initial: 'inactive',
  context: {
    /* some data */
  },
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
