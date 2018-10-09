<template>
<div class="row myvaults">
    <div class="col-6" v-for="vault in userVaults" :key="vault.id">
        <div class="row">
            <div class="col-12"><h1>{{vault.name}}</h1></div>
            <div class="col-12">
                <div class="row">
                    <div class="col-2" v-for="keep in vaultKeeps" :key="keep.id">

                    </div>
                </div>
            </div>
        </div>
        

    </div>
</div>
</template>
<script>
export default {
  name: "myvaults",
  computed: {
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    },
    userVaults() {
      return this.$store.state.vaults;
    }
  }
};
</script>
<style>
</style>

