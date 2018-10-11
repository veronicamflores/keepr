<template>
<div class="mykeeps row">
    <div class="col-3 mb-2 mt-2" v-for="keep in userKeeps" :key="keep.id">
        <img :src="keep.img" class="img-fluid round-border bd-round " :alt="keep.name">
        <p>
          <span @click="deleteKeeps({id: keep.id, userId: keep.userId})"><i class="fas fa-trash-alt"></i>&nbsp;</span>
          <span><i class="fas fa-folder-plus"></i></span>
          <span></span>
        </p>
    </div>
</div>
</template>

<script>
export default {
  name: "mykeeps",
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$store.state.user.id);
    this.$store.dispatch("getUserVaults", this.$store.state.user.id);
  },
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

