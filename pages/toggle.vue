<template>
  <button class="toggle-button" @click="send('TOGGLE')">
    {{ current.matches('inactive') ? 'Off' : 'On' }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

import { interpret } from 'xstate'
import { toggleMachine } from '@/machines/toggle'

export default Vue.extend({
  name: 'Toggle',
  mounted() {
    this.toggleService
      .onTransition((state) => {
        this.current = state
      })
      .start()
  },
  data() {
    return {
      toggleService: interpret(toggleMachine),
      current: toggleMachine.initialState,
    }
  },
  methods: {
    send(event: string) {
      this.toggleService.send(event)
    },
  },
})
</script>

<style lang="scss" scoped>
.toggle-button {
  @include size(200px, auto);

  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid var(--primary);
  text-align: center;
}
</style>
