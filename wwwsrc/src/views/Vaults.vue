<template>
<div class="container-fluid vaults mb-2 mt-2">
     <nav class="navbar row yellow-bg">
          <div class="col-2 mt-2 mb-2">
            <router-link class="navbar-brand" to="/"><a>PNTRST</a></router-link>
          </div>
          <div class="col-8 mt-2 mb-2">
            <router-link to="/profile"><a>Profile</a></router-link> |
            <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
            <router-link to="/profile/vaults"><a>My Vaults</a></router-link>
          </div>
          <div class="col-2 mt-2 mb-2">
            <a href="#">Logout</a>
          </div>
        </nav>
        <div class="row mt-2 mb-2">
                <div class="col-12"><h2>My Vaults</h2></div>
                <div class="col-12">
                  <form class="form-inline" @submit.prevent="createVault">
                    <input class="form-control p-2" type="text" v-model="vaultName" placeholder="Vault Name">
                    <input class="form-control p-2" type="text" v-model="vaultDescription" placeholder="Vault Description">
                    <button class="btn" type="submit">Sumbit</button>
                  </form>
                </div>
              </div>
    <div class="row">
        <div class="col-6 bd-round " v-for="vault in userVaults" :key="vault.id">
        <div class="row">
            <div class="col-12 bg-black"><p>{{vault.name}}</p></div>
            <div class="col-12">
                <VaultKeeps :vaultId="vault.id"/>
            </div>
        </div>
        </div> 
    </div>
</div>
</template>
<script>
import VaultKeeps from "@/components/VaultKeeps";
export default {
  name: "vaults",
  data() {
    return {
      vaultName: "",
      vaultDescription: ""
    };
  },
  created() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    userVaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    createVault() {
      let vaultData = {
        name: this.vaultName,
        description: this.vaultDescription,
        userId: this.user.id
      };
      this.$store.dispatch("createVaults", vaultData);
      this.vaultName = "";
      this.vaultDescription = "";
      this.vaultImg = "";
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
</style>

