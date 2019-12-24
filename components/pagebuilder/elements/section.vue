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
      <span class="btn btn-light5 btn-slim" @click="trackChangeId=genUID();$root.$emit('open-column-drawer', trackChangeId);">Add New Row</span>
    </div>
        <div v-for="(node, idx) in nodes" :key="idx">
           <Row @add-row="addRow" v-if="!noRow" :numColumns="node.numColumns" />
        </div>
  </section>
</template>

<script>
  import { Container, Draggable } from 'vue-smooth-dnd'

  import Row from './row.vue'

  export default {
    props: ['index', 'rows'],
    components: {
      Row,
      Container,
      Draggable
    },
    data() {
      return {
        noRow: true,
        nodes: [],
        trackChangeId: null
      }
    },
    created(){
      if(this.rows) {
        this.nodes = this.rows.nodes
        this.noRow = false
      }
    },
    mounted() {
      this.$root.$on('add-column', data => {
        let newData = data.split('-')
        if(newData[0] == this.trackChangeId) {
          this.noRow = false
          let lastIndex = this.nodes.length ? Math.max.apply(null, this.nodes.map(elem => elem.id)) : -1
          this.nodes.push({type: 'row', numColumns: parseInt(newData[2]), id: lastIndex + 1 })
          this.$emit('add-rows', {nodes: this.nodes, index: this.index})
        }
      });
    },
    methods: {
      addRow(){
        this.trackChangeId = this.genUID()
        this.$root.$emit('open-column-drawer', this.trackChangeId);
      },
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