<template>
  <div class="counter">
    <button class="counter-button" @click="send('DEC')">-</button>
    <h2>{{ current.context.count }}</h2>
    <button class="counter-button" @click="send('INC')">+</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { interpret } from 'xstate'
import { counterMachine } from '@/machines/counter'

export default Vue.extend({
  name: 'Counter',
  mounted() {
    this.counterService
      .onTransition((state) => {
        this.current = state
      })
      .start()
  },
  data() {
    return {
      counterService: interpret(counterMachine),
      current: counterMachine.initialState,
    }
  },
  methods: {
    send(event: string) {
      this.counterService.send(event)
    },
  },
})
</script>

<style lang="scss" scoped>
.counter {
  @include size(100%, auto);
  @include display-flex();

  &-button {
    margin: 0 16px;
    padding: 8px 12px;
    border: 1px solid var(--grey);
    transition: 0.5s;

    &:hover {
      background-color: var(--primary-light);
    }
  }
}
</style>
