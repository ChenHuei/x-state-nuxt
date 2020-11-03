<template>
  <div class="default">
    <div class="default-header">
      <layout-menu></layout-menu>
    </div>
    <div class="default-body">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import LayoutMenu from '@/components/project/layout/AsyncMenu'

export default Vue.extend({
  components: { LayoutMenu },
})
</script>

<style lang="scss" scoped>
.default {
  @include size(100vw, 100vh);

  &-header {
    @include size(100%, auto);

    border-bottom: 1px solid var(--grey);
  }

  &-body {
    @include size(100%);
    @include display-flex();
  }
}
</style>
