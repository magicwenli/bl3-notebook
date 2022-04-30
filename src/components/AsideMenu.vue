<template>
  <aside v-show="isAsideVisible" class="aside is-placed-left is-expanded">
    <router-link to="/">
      <aside-tools :is-main-menu="true">
        <span slot="label"> <b>BL3</b> Notebook </span>
      </aside-tools>
    </router-link>

    <div class="menu is-menu-main">
      <template v-for="(menuGroup, index) in menu">
        <p class="menu-label" v-if="typeof menuGroup === 'string'" :key="index">
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :key="index"
          @menu-click="menuClick"
          :menu="menuGroup"
        />
      </template>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import AsideTools from '@/components/AsideTools'
import AsideMenuList from '@/components/AsideMenuList'

export default {
  name: 'AsideMenu',
  components: { AsideMenuList, AsideTools },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState(['isAsideVisible'])
  },
  methods: {
    menuClick (item) {
      this.$emit('menu-click', item)
    }
  }
}
</script>
