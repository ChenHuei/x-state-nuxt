<template>
  <div class="menu-list">
    <nuxt-link
      class="menu-item"
      v-for="item in list"
      :key="item.value"
      :to="item.value"
    >
      {{ item.value }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface MenuItem {
  value: string
}

export default Vue.extend({
  name: 'LayoutMenu',
  data() {
    return {
      list: [
        {
          value: 'toggle',
        },
        {
          value: 'counter',
        },
        {
          value: 'todos',
        },
        {
          value: 'calculator',
        },
        {
          value: 'light',
        },
      ] as MenuItem[],
    }
  },
})
</script>

<style lang="scss" scoped>
.menu {
  &-list {
    padding: 16px 24px;
  }

  &-item {
    margin-right: 16px;
    text-decoration: none;
    color: var(--black);
    transition: 0.5s;

    &:hover {
      color: var(--primary);
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
