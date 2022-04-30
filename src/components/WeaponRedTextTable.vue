<template>
  <div>
    <modal-box :is-active="isModalActive" :trash-object-name="trashObjectName" @confirm="trashConfirm"
               @cancel="trashCancel"/>
    <b-table
      :checked-rows.sync="checkedRows"
      :loading="isLoading"
      :paginated="paginated"
      :per-page="perPage"
      :debounce-search="debounceSearch"
      :striped="true"
      :hoverable="true"
      :show-detail-icon="true"
      detailed
      default-sort="name"
      :data="clients">

      <b-table-column label="厂商" field="厂商" sortable searchable width="150" v-slot="props">
        {{ props.row.厂商 }}
      </b-table-column>
      <b-table-column label="种类" field="枪种" sortable searchable width="150" v-slot="props">
        {{ props.row.枪种 }}
      </b-table-column>
      <!-- <b-table-column label="品质" field="品质" sortable searchable width="150" v-slot="props">
        {{ props.row.品质 }}
      </b-table-column> -->
      <b-table-column label="名称" field="名称" sortable searchable width="230" v-slot="props">
        {{ props.row.名称 }}
      </b-table-column>
      <b-table-column label="红字" field="红字" sortable searchable v-slot="props">
        {{ props.row.红字 }}
      </b-table-column>

      <template #detail="props">
                <article class="media">
                    <figure class="media-left">
                        <p class="image is-64x64">
                        </p>
                    </figure>
                    <div class="media-content">
                        <div class="content">
                            <p><span :class="props.row.品质" class="gunname">{{ props.row.name }}</span>&nbsp;&nbsp; @{{ props.row.brand }}
                            <br>
                            <span class="feature" v-html="props.row.效果"></span>
                            <br>
                            <span class="droparea" v-html="props.row.掉落"></span>
                            <br>
                            <span class="element" v-if="props.row.元素.length===0">普通</span>
                            <span class="element" v-else v-for="e in props.row.元素" :key="e" :class="e">{{ e }}</span>
                            <br>
                            <span class="redtext">{{ props.row.redtext }}</span>
                            </p>
                        </div>
                    </div>
                </article>
            </template>

      <section class="section" slot="empty">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large"/>
            </p>
            <p>Fetching data...</p>
          </template>
          <template v-else>
            <p>
              <b-icon icon="emoticon-sad" size="is-large"/>
            </p>
            <p>Nothing's here&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import axios from 'axios'
import ModalBox from '@/components/ModalBox'

export default {
  name: 'ClientsTableSample',
  components: { ModalBox },
  props: {
    dataUrl: {
      type: String,
      default: null
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 25,
      debounceSearch: 300,
      checkedRows: []
    }
  },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  mounted () {
    if (this.dataUrl) {
      this.isLoading = true
      axios
        .get(this.dataUrl)
        .then(r => {
          this.isLoading = false
          if (r.data && r.data.data) {
            if (r.data.data.length > this.perPage) {
              this.paginated = true
            }
            this.clients = r.data.data
          }
        })
        .catch(e => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${e.message}`,
            type: 'is-danger'
          })
        })
    }
  },
  methods: {
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false
      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
}
</script>

<style scoped>
.media {
    align-items: flex-start;
    display: flex;
    text-align: inherit;
}

.media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: inherit;
}

.redtext {
    color: red;
    font-weight: bold;
}

.gunname {
    font-weight: bold;
    text-transform: capitalize;
}

.gunname.传奇 {
  color: rgb(255,150,0);
  font-weight: 800;
}

.gunname.史诗 {
  color: purple;
  font-weight: 800;
}

.gunname.罕见 {
  color: rgb(47,120,255);
}

.gunname.稀有 {
  color: rgb(0,255,0);
}

.gunname.普通 {
  color: rgb(0, 0, 0);
}

.feature {
  /* font-style: italic; */
  font-weight: 400;
}

.droparea{
  color: blueviolet;
}

.element:not(body) {
    align-items: center;
    background-color: #e8e8e8;
    border-radius: 4px;
    color: rgb(0, 0, 0);
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    white-space: nowrap;
    margin-left: .5rem;
}

.element.辐射 {
    background-color: #ffa500;
    color: white;
    font-weight: 600;
}

.element.火 {
    background-color: #ff0000;
    color: white;
    font-weight: 600;
}

.element.冰 {
    background-color: #00ffff;
    color: purple;
}

.element.电 {
    background-color: #0055ff;
    color: white;
    font-weight: 600;
}

.element.酸 {
    background-color: #00ff00;
    color: purple;
}
</style>
