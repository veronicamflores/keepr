<template>
<div class="row myvaults mb-2 mt-2  d-flex justify-content-around">
<div class="col-5 bd-round mt-2 mb-2" v-for="vault in userVaults" :key="vault.id">
        <div class="row">
            <div class="col-12 bg-black"><p>{{vault.name}} <span @click="deleteVaults({id: vault.id, userId: vault.userId})"><i class="fas fa-trash-alt"></i>&nbsp;</span></p></div>
            <div class="col-12">
                <VaultKeeps :vaultId="vault.id" class="d-flex justify-content-center"/>
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
  methods: {
    deleteVaults(vaultData) {
      this.$store.dispatch("deleteVaults", vaultData);
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

