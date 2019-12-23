<template>
  <div class="hl_page-creator--column">
    <div href="#" class="new-element-blank" v-if="!nodes.length">
      <span class="btn btn-light6 btn-slim" @click="trackChangeId=genUID();$root.$emit('open-elements-drawer', trackChangeId);">Add New Element</span>
    </div>
    <!-- Column can have heading, image. -->
     <div v-for="node in nodes" :key="node.id">
      <component :is="node.type"/>
    </div>
  </div>
</template>

<script>
  import ImageElement from './image-element.vue'
  import Heading from './heading.vue'
  export default {
    components: {
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
      bat: function(ev){
        console.log(ev)
        window.cat = ev
      }
    }
  }
</script>
