<template>
  <div
    class="light"
    @click="send"
    :style="{ 'background-color': current.value }"
  >
    {{ current.value }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { interpret } from 'xstate'
import { lightMachine } from '@/machines/light'

export default Vue.extend({
  name: 'Light',
  mounted() {
    this.lightService
      .onTransition((state) => {
        this.current = state
      })
      .start()
  },
  data() {
    return {
      lightService: interpret(lightMachine),
      current: lightMachine.initialState,
    }
  },
  methods: {
    send() {
      this.lightService.send('CLICK')
    },
  },
})
</script>

<style lang="scss" scoped>
.light {
  @include size(50%, 40px);
  @include display-flex();

  border-radius: 4px;
  color: var(--white);
  cursor: pointer;
}
</style>
