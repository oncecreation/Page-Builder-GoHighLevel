<template>
  <div>
    <PageBuilderOptions :columns="columns" :columnDrawerOpen="columnDrawerOpen"></PageBuilderOptions>
    <div class="hl_page-creator--content" id="page-main">
      <Container @drop="onDrop">
        <Draggable v-for="element in pageElements" :key="element.id">
          <Section :index="element.id"
            @delete-section="deleteSection"
            @add-section="addSection"
            @open-drawer="openDrawer"
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
      pageElements: [{id: 0, meta: 'Initial Section'}],
      columnDrawerOpen: false,
    }
  },
  methods: {
    onDrop(dropResult) {
      this.pageElements = applyDrag(this.pageElements, dropResult);
    },
    openDrawer(type) {
      switch(type){
        case 'selectColumn':
          this.columnDrawerOpen = !this.columnDrawerOpen
          break
      }
    },
    addSection() {
      let lastIndex = Math.max.apply(null, this.pageElements.map(elem => elem.id))
      this.pageElements.push({id: lastIndex + 1})
    },
    deleteSection(index) {
      if(!index) { return }
      this.pageElements = this.pageElements.filter(element => element.id !== index)
    },
  }
}
</script>

<style>
  #page-main {
    padding-left: 70px;
  }
</style>