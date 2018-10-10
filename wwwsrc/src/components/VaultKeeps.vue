<template>
<div class="row vaultkeeps">
    <div class="col-6 mt-1 mb-1" v-for="keep in vaultKeeps" :key="keep.id">
        <img :src="keep.img" class="img-fluid" :alt="keep.name">
    </div>
</div>
</template>

<script>
export default {
  name: "vaultkeeps",
  mounted() {
    this.$store.dispatch("getVaultKeeps", this.vaultId);
  },
  computed: {
    vaultKeeps() {
      return this.$store.state.vaultKeeps[this.vaultId];
    }
  },
  props: ["vaultId"]
};
</script>
