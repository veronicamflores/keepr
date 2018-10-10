<template>
<div class="mykeeps row">
    <div class="col-3  mb-2 mt-2" v-for="keep in userKeeps" :key="keep.id">
        <img :src="keep.img" class="img-fluid round-border" :alt="keep.name">
    </div>
</div>
</template>

<script>
export default {
  name: "mykeeps",
  computed: {
    userKeeps() {
      return this.$store.state.userKeeps;
    }
  }
};
</script>
<style>
.round-border {
  border-radius: 10px;
}
</style>

