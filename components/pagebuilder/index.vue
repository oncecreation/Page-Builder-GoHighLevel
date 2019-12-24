<template>
  <div>
    <PageBuilderOptions :columns="columns"></PageBuilderOptions>
    <div class="hl_page-creator--content" id="page-main">
      <Container @drop="onDrop">
        <Draggable v-for="element in nodes" :key="element.id">
          <Section
            @delete-section="deleteSection"
            @add-section="addSection"
            @add-rows="addRows"
            :index="element.id"
            :rows="element.rows"
          ></Section>
        </Draggable>
      </Container>
    </div>
   <nuxt/>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import Section from './elements/section.vue'
import Row from './elements/row.vue'
import Column from './elements/column.vue'
import PageBuilderOptions from './options.vue'

export default {
  components: {
    PageBuilderOptions,
    Container,
    Draggable,
    Section,
  },
  data() {
    return {
      columns: [
        {id: 'col-1',name: '1 Column'},
        {id: 'col-2', name: '2 Column'},
        {id: 'col-3', name: '3 Column'},
        {id: 'col-4', name: '4 Column'},
        {id: 'col-5', name: '5 Column'},
        {id: 'col-6', name: '6 Column'},
        {id: 'col-left', name: 'Left Sidebar'},
        {id: 'col-right', name: 'Right Sidebar'}
      ],
      nodes: [
        {id: 0, meta: 'Initial Section', nodes: []}
      ],
    }
  },
  created () {
    if(this.$storage.get('section')) {
      this.nodes = this.$storage.get('section')
    }
  },
  methods: {
    save(){
      this.$storage.set('section', this.nodes)
    },
    addRows(rows) {
      this.nodes[rows.index].rows = rows
      this.save()
    },
    onDrop(dropResult) {
      this.nodes = this.applyDrag(this.nodes, dropResult);
    },
    addSection() {
      let lastIndex = Math.max.apply(null, this.nodes.map(elem => elem.id))
      this.nodes.push({id: lastIndex + 1})
      this.save()
    },
    deleteSection(index) {
      if(!index) { return }
      this.nodes = this.nodes.filter(element => element.id !== index)
      this.save()
    },
  }
}
</script>

<style>
  #page-main {
    padding-left: 70px;
  }

  .smooth-dnd-container {
    min-height: 0px;
     min-width: 0px; 
  }
</style>