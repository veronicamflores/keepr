<template>
<div class="container-fluid vaults">
     <nav class="navbar row yellow-bg">
          <div class="col-2 mt-2 mb-2">
            <router-link class="navbar-brand" to="/"><a>KEEPR</a></router-link>
          </div>
          <div class="col-8 mt-2 mb-2">
            <router-link to="/profile"><a>DashBoard</a></router-link> |
            <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
            <router-link to="/profile/vaults"><a>My Vaults</a></router-link>
          </div>
          <div class="col-2 mt-2 mb-2">
            <button @click="logout" class="btn btn-danger">Logout</button>
          </div>
        </nav>
        <div class="row mt-2 mb-2">
                <div class="col-12"><h2>My Vaults</h2></div>
                <div class="col-12">
                  <form class="form-inline row d-flex justify-content-around" @submit.prevent="createVault">
                    <input class="form-control p-2 col-5" type="text" v-model="vaultName" placeholder="Title">
                    <input class="form-control p-2 col-5" type="text" v-model="vaultDescription" placeholder="Description">
                    <button class="btn btn-warning col-1" type="submit"><i class="fas fa-plus"></i></button>
                  </form>
                </div>
              </div>
    <div class="row d-flex justify-content-around ">
        <div class="col-5 bd-round mt-2 mb-2" v-for="vault in userVaults" :key="vault.id">
        <div class="row">
            <div class="col-12 bg-black d-flex justify-content-between">
              <p><strong>{{vault.name}}</strong></p>
              <span @click="makeEditVisible(vault.id)" ><p><i class="fas fa-edit clickable"></i></p> &nbsp;</span>
              <span @click="deleteVaults({id: vault.id, userId: vault.userId})"><p><i class="fas fa-trash-alt clickable"></i>&nbsp;</p></span>
            </div>
            <div class="col-12" v-if="editVisible == vault.id">
                  <form @submit.prevent="editNameVault({id: vault.id, userId: vault.userId, description: vault.description, name: nameVault})" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="nameVault" placeholder="Title"> <button class="btn btn-success col-2 form-control" type="submit">+</button> </form>
                  <form @submit.prevent="editDescriptionVault({id: vault.id, userId: vault.userId,description: descripvault, name: vault.name})" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="descripVault" placeholder="Description"> <button class="btn btn-success col-2 form-control">+</button> </form>
            </div>
            <div class="col-12">
                <VaultKeeps :vaultId="vault.id" class=" d-flex justify-content-center"/>
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
      //for posting
      vaultName: "",
      vaultDescription: "",
      //for putting
      nameVault: "",
      descripVault: "",
      editVisible: ""
    };
  },
  created() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$store.state.user.id);
    this.$store.dispatch("getUserVaults", this.$store.state.user.id);
    this.$store.dispatch("getAllKeeps");
  },
  computed: {
    userVaults() {
      return this.$store.state.vaults;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    makeEditVisible(vaultId) {
      if (vaultId != this.editVisible) {
        this.editVisible = vaultId;
      } else {
        this.editVisible = "";
      }
    },
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
    },
    editNameVault(vaultData) {
      this.$store.dispatch("updateVault", vaultData);
      this.nameVault = "";
    },
    editDescriptionVault(vaultData) {
      this.$store.dispatch("updateVault", vaultData);
      this.descripVault = "";
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

