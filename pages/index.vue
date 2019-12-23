<template>
  <PageBuilder></PageBuilder>
</template>

<script>
  import PageBuilder from '../components/pagebuilder'
  import Vue from 'vue'

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

  Vue.mixin({
    methods: {
      genUID: () => Math.random().toString(20).substring(2, 10) + Math.random().toString(20).substring(2, 10),
      applyDrag,
    }
  })

  export default {
    components: {
      PageBuilder,
    }
  }
</script>
