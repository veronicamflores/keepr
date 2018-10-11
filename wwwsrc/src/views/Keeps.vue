<template>
<div class="keeps container-fluid">
        <nav class="navbar row yellow-bg">
          <div class="col-2 mt-2 mb-2">
            <router-link class="navbar-brand" to="/"><a>PNTRST</a></router-link>
          </div>
          <div class="col-2 mt-2 mb-2">
            <p>Hello {{user.username}}</p>
          </div>
          <div class="col-6 mt-2 mb-2">
            <router-link to="/profile"><a>Profile</a></router-link> |
            <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
            <router-link to="/profile/vaults"><a>My Vaults</a></router-link>
          </div>
          <div class="col-2 mt-2 mb-2">
            <a href="#">Logout</a>
          </div>
        </nav>
        <div class="row mt-2 mb-2">
                <div class="col-12"><h2>My Keeps</h2></div>
                <div class="col-12">
                  <form class="form-inline" @submit.prevent="createKeep">
                    <input class="form-control p-2" type="text" v-model="keepName" placeholder="Keep Name">
                    <input class="form-control p-2" type="text" v-model="keepDescription" placeholder="Keep Description">
                    <input class="form-control p-2" type="text" v-model="keepImg" placeholder="Keep Img">
                    <button class="btn" type="submit">Sumbit</button>
                  </form>
                </div>
              </div>
    <div class="row">
<div class="col-3  mb-2 mt-2" v-for="keep in userKeeps" :key="keep.id">
        <div class="card round-border">
            <img :src="keep.img" class="card-img-top" :alt="keep.name">
            <div class="card-body">
                <h4 class="card-title">{{keep.name}}</h4>
                <p class="card-text">{{keep.description}}</p>
                <p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}   <i class="far fa-eye"></i>: {{keep.views}}   <i class="fas fa-bookmark"></i>: {{keep.shares}}</p>
                <p v-if="keep.isPrivate == 0">Public</p>
                <p v-else>Private</p>
                <span @click="deleteKeeps({id: keep.id, userId: keep.userId})"><i class="fas fa-trash-alt"></i>&nbsp;</span>
                <span><i class="fas fa-edit"></i> &nbsp;</span>
                <span><i class="fas fa-folder-plus"></i></span>
                <form>
                  <select @click="addToVault(keep.id)" v-model="newVaultId">
                    <option v-for="vault in vaults" :key="vault.id" :value="vault.id">{{vault.name}}</option>
                  </select>
                </form>
            </div> 
        </div>
    </div>
    </div>
    
</div>
</template>

<script>
export default {
  name: "keeps",
  data() {
    return {
      keepName: "",
      keepDescription: "",
      keepImg: "",
      newVaultId: ""
    };
  },
  created() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    deleteKeeps(keepData) {
      this.$store.dispatch("deleteKeeps", keepData);
    },
    createKeep() {
      debugger;
      let keepData = {
        name: this.keepName,
        description: this.keepDescription,
        userId: this.user.id,
        img: this.keepImg,
        isPrivate: 1
      };
      this.$store.dispatch("createKeeps", keepData);
      this.keepName = "";
      this.keepDescription = "";
      this.keepImg = "";
    },
    addToVault(keepId) {
      let vaultKeepData = {
        keepId: keepId,
        vaultId: this.newVaultId,
        userId: this.user.id
      };
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    userKeeps() {
      return this.$store.state.userKeeps;
    },
    vaults() {
      return this.$store.state.vaults;
    }
  }
};
</script>
<style>
.round-border {
  border-radius: 10px;
}
</style>