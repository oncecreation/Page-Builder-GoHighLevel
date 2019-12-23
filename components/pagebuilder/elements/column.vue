<template>
  <div class="hl_page-creator--column">
    <div href="#" class="new-element-blank" v-if="!nodes.length">
      <span class="btn btn-light6 btn-slim" @click="$root.$emit('open-elements-drawer')">Add New Element</span>
    </div>
    <!-- Column can have heading, image. -->
     <Heading v-if="nodes.length"></Heading>
  </div>
</template>

<script>
  import Image from './image.vue'
  import Heading from './heading.vue'
  export default {
    components: {
      Heading,
      Image,
    },
    data(){
      return {
        nodes: []
      }
    },
    mounted(){
      this.$root.$on('add-heading', data => {
          this.nodes.push(20)
      });

      this.$root.$on('add-image', data => {
          console.log('add image')
      });
    }
  }
</script>
