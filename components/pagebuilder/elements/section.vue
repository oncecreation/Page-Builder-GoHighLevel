<template>
  <section class='hl_page-creator--section'>
    <div class="hl_page-creator--actions">
      <div class="move-actions">
        <span data-tooltip="tooltip" data-placement="right" title="Up"><i class="icon icon-arrow-up-2"></i></span>
        <span data-tooltip="tooltip" data-placement="right" title="Down"><i
          class="icon icon-arrow-down-2"></i></span>
      </div>
      <div class="more-actions">
        <span data-tooltip="tooltip" data-placement="left" title="Settings"><i class="fas fa-cog"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Clone"><i class="far fa-eye"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Save"><i class="far fa-copy"></i></span>
        <span data-tooltip="tooltip" data-placement="left" title="Delete" @click="$emit('delete-section', index)"><i class="far fa-trash-alt"></i></span>
      </div>
    </div>
    <span class="add-new-section" @click="$emit('add-section')" data-tooltip="tooltip" data-placement="bottom" title="Add New Section"><i class="icon icon-plus"></i></span>
    <div href="#" class="new-row-blank" v-if="noRow">
      <span class="btn btn-light5 btn-slim"@click="addRow(index)">Add New Row</span>
    </div>
    <Row v-if="!noRow" :numColumns="numColumns"></Row>
  </section>
</template>

<script>
  import Row from './row.vue'

  export default {
    props: ['index'],
    components: {
      Row,
    },
    data() {
      return {
        noRow: true
      }
    },
    mounted() {
      this.$root.$on('add-column', data => {
          this.addColumn(data)
      });

      this.$root.$on('add-element', (data, id) => {
        console.log('element add', id)
      })
    },
    methods: {
      addRow(index) {
        this.$root.$emit('open-column-drawer', 'selectColumn')
      },
      addColumn(type) {
       this.noRow = false
        switch(type) {
          case 'col-1':
            this.numColumns = 1
            break
          case 'col-2':
            this.numColumns = 2
            break
          case 'col-3':
            this.numColumns = 3
            break
          case 'col-4':
            this.numColumns = 4
            break
          default:
            this.numColumns = 1
            break
        }
      }
    }
  }
</script>

<style>
  .hl_page-creator--section{
    margin-bottom: 14px;
  }
  .hl_page-creator--section:hover {
    border-color: #37ca37;
  }
  .hl_page-creator--section:hover .hl_page-creator--actions, .hl_page-creator--section:hover .add-new-section {
    opacity: 1
  }
</style>