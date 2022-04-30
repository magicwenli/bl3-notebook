<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <section class="section is-main-section">
        <grenade-red-text-table :data-url="`${$router.options.base}data-sources/grenade-redtext.json`"/>
      <hr>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import GrenadeRedTextTable from '@/components/GrenadeRedTextTable'

export default {
  name: 'grenade-red-text',
  components: { TitleBar, GrenadeRedTextTable },
  computed: {
    titleStack () {
      return [
        '~',
        '手雷红字'
      ]
    }
  }
}
</script>
