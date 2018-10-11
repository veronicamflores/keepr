<template>
<div class="row vaultkeeps">
    <div class="col-6 mt-1 mb-1" v-for="keep in vaultKeep" :key="keep.id">
        <img :src="keep.img" class="img-fluid bd-round" :alt="keep.name">
        <span @click="removeFromVault(keep.id)"><i class="fas fa-times-circle"></i></span>
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
    vaultKeep() {
      return this.$store.state.vaultKeeps[this.vaultId];
    }
  },
  methods: {
    removeFromVault(keepId) {
      let vaultKeepData = {
        keepId: keepId,
        vaultId: this.vaultId
      };
      this.$store.dispatch("deleteVaultKeeps", vaultKeepData);
    }
  },
  props: ["vaultId"]
};
</script>
