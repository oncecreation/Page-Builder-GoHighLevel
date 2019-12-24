<template>
    <Container group-name="1" @drop="onDrop" tag="div" class="hl_page-creator--column">
      <div href="#" class="new-element-blank" v-if="!nodes.length">
        <span class="btn btn-light6 btn-slim" @click="trackChangeId=genUID();$root.$emit('open-elements-drawer', trackChangeId);">Add New Element</span>
      </div>
      <!-- Column can have heading, image. -->
      <Draggable v-for="node in nodes" :key="node.id" tag="div">
        <component :is="node.type"/>
      </Draggable>
  </Container>
</template>

<script>
  import ImageElement from './image-element.vue'
  import Heading from './heading.vue'
  import { Container, Draggable } from 'vue-smooth-dnd'

  export default {
    components: {
      Container,
      Draggable,
      Heading,
      ImageElement,
    },
    data(){
      return {
        trackChangeId: null,
        nodes: []
      }
    },
    mounted(){
      this.$root.$on('add-heading', data => {
          if(data == this.trackChangeId) {
            this.nodes.push({ 'type': 'heading', value: 'Heading', id: data})
          }
      });

      this.$root.$on('add-image', data => {
          if(data == this.trackChangeId) {
            this.nodes.push({ 'type': 'ImageElement', value: 'Image', id: data})
          }
      });
    },
    methods:{
      onDrop(element){
        let data = element.payload.split('-')
        console.log(data)
        if (data[1] === this.trackChangeId) {
          if (data[0] === 'heading') {
            this.nodes.push({ 'type': 'heading', value: 'Heading', id: data[1]})
          } else {
            this.nodes.push({ 'type': 'ImageElement', value: 'Heading', id: data[1]})
          }
        }
      }
    }
  }
</script>
<style>
.smooth-dnd-container {
  
}
</style>
