<template>
<div class="row myvaults mb-2 mt-2  d-flex justify-content-center">
<div class="col-4 bd-round" v-for="vault in userVaults" :key="vault.id">
        <div class="row">
            <div class="col-12 bg-black"><p>{{vault.name}}</p></div>
            <div class="col-12">
                <VaultKeeps :vaultId="vault.id"/>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import VaultKeeps from "@/components/VaultKeeps";
export default {
  name: "myvaults",
  computed: {
    userVaults() {
      return this.$store.state.vaults;
    }
  },
  components: {
    VaultKeeps
  }
};
</script>
<style>
.bg-black {
  background-color: #35d0ba;
}
.bd-round {
  border: 2px solid #35d0ba;
  border-radius: 5px;
}
.mw {
  max-width: 50%;
}
</style>

