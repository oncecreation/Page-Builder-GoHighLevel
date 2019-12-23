<template>
  <div class="hl_page-creator--column">
    <div href="#" class="new-element-blank">
      <span class="btn btn-light6 btn-slim" @click="$root.$emit('add-element', 'bac')">Add New Element</span>
    </div>
  </div>
  <!-- Column can have heading, image. -->
  

</template>

<script>
  import Image from './image.vue'
  import Heading from './heading.vue'
  export default {
    data(){
      return {
        columnElements: []
      }
    }
  }
</script>
