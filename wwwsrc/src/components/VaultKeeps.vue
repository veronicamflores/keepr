<template>
<div class="row vaultkeeps">
    <div class="col-6 mt-3 mb-3" v-for="keep in vaultKeep" :key="keep.id">
        <img :src="keep.img" class="img-fluid bd-round" :alt="keep.name">
        <p>
          <span @click="removeFromVault(keep.id)"><i class="fas fa-times-circle"></i></span> &nbsp;
          <span v-if="user.id == keep.userId"><i class="fas fa-trash-alt"></i></span>
        </p>
        
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
    user() {
      return this.$store.state.user;
    },
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
