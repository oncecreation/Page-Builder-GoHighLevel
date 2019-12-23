<template>
  <div>
  <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
    <label v-if="!image" class="btn display-inline">
      Drop an Image
      <input type="file" name="image" @change="onChange">
    </label>
    <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
    <img :src="image" alt="" class="img" />
    </div>
    </label>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        image: ''
      }
    },
    methods: {
      onDrop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        this.createFile(files[0]);
      },
      onChange(e) {
        var files = e.target.files;
        this.createFile(files[0]);
      },
      createFile(file) {
        if (!file.type.match('image.*')) {
          alert('Select an image');
          return;
        }
        var img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = function(e) {
          vm.image = e.target.result;
        }
        reader.readAsDataURL(file);
      },
      removeFile() {
        this.image = '';
      }
    }
  }
</script>

<style scoped>
  .btn {
  background-color: #d3394c;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  position: relative;
  padding: 6px 8px;
}

.btn:hover {
  background-color: #722040;
}

input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.align-center {
  text-align: center;
}

.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: inline-block !important;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  height: auto;
  max-height: 80%;
  max-width: 80%;
  width: auto;
}

.drop {
  border: 2px dashed #ccc;
  border-radius: 2px;
  height: 100%;
  width: 100%;
}
</style>