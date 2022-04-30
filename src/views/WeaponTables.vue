<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <section class="section is-main-section">
        <weapon-red-text-table :data-url="`${$router.options.base}data-sources/weapon-redtext.json`"/>
      <hr>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import WeaponRedTextTable from '@/components/WeaponRedTextTable'

export default {
  name: 'weapon-red-text',
  components: { TitleBar, WeaponRedTextTable },
  computed: {
    titleStack () {
      return [
        '~',
        '武器红字'
      ]
    }
  }
}
</script>
