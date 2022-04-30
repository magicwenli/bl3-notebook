<template>
  <div>
    <title-bar :title-stack="titleStack"/>
    <section class="section is-main-section">
        <artifact-red-text-table :data-url="`${$router.options.base}data-sources/artifact-redtext.json`"/>
      <hr>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import ArtifactRedTextTable from '@/components/ArtifactRedTextTable'

export default {
  name: 'artifact-red-text',
  components: { TitleBar, ArtifactRedTextTable },
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
