<template>
  <div>
    <PageBuilderOptions :columns="columns"></PageBuilderOptions>
    <div class="hl_page-creator--content" id="page-main">
      <Container @drop="onDrop">
        <Draggable v-for="element in virtualDom" :key="element.id">
          <Section
            @delete-section="deleteSection"
            @add-section="addSection"
            :index="element.id"
            :nodes="element.nodes"
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
import Image from './elements/image.vue'
import Column from './elements/column.vue'
import Heading from './elements/heading.vue'
import PageBuilderOptions from './options.vue'

const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr
  const result = [...arr]
  let itemToAdd = payload
  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }
  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }
  return result
}

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
      virtualDom: [
        {id: 0, meta: 'Initial Section', nodes: []}
      ],
    }
  },
  mounted(){

  },
  methods: {
    onDrop(dropResult) {
      this.virtualDom = applyDrag(this.virtualDom, dropResult);
    },
    addSection() {
      let lastIndex = Math.max.apply(null, this.virtualDom.map(elem => elem.id))
      this.virtualDom.push({id: lastIndex + 1})
    },
    deleteSection(index) {
      if(!index) { return }
      this.virtualDom = this.virtualDom.filter(element => element.id !== index)
    },
  }
}
</script>

<style>
  #page-main {
    padding-left: 70px;
  }
</style>