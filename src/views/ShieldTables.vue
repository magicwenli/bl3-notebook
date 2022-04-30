<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <section class="section is-main-section">
        <shield-red-text-table :data-url="`${$router.options.base}data-sources/shield-redtext.json`"/>
      <hr>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import ShieldRedTextTable from '@/components/ShieldRedTextTable'

export default {
  name: 'shield-red-text',
  components: { TitleBar, ShieldRedTextTable },
  computed: {
    titleStack () {
      return [
        '~',
        '护盾红字'
      ]
    }
  }
}
</script>
