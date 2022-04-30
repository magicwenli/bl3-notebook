<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu" @menu-click="menuClick"/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        'Red Text',
        [
          {
            to: '/',
            label: '武器 Weapon',
            icon: 'pistol'
          },
          {
            to: '/grenade-tables',
            label: '手雷 Grenade',
            icon: 'decagram-outline'
          },
          {
            to: '/shield-tables',
            label: '护盾 Shield',
            icon: 'shield'
          },
          {
            to: '/artifact-tables',
            label: '神器 Artifact',
            icon: 'diamond-stone'
          }
        ],
        'About',
        [
          {
            to: '/about',
            label: '关于',
            icon: 'help-circle'
          }
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  },
  methods: {
    menuClick (item) {
      if (item.action && item.action === 'dark-mode-toggle') {
        this.$store.commit('darkModeToggle')
      }
    }
  }
}
</script>
