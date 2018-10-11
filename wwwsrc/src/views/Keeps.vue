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
                  <form class="form-inline row d-flex justify-content-around" @submit.prevent="createKeep">
                    <input class="form-control p-2 col-3" type="text" v-model="keepName" placeholder="Keep Title">
                    <input class="form-control p-2 col-4" type="text" v-model="keepDescription" placeholder="Keep Description">
                    <input class="form-control p-2 col-3" type="text" v-model="keepImg" placeholder="Keep Img">
                    <label for="private">Private?</label>
                    <input type="checkbox" name="private" class="form-control" unchecked>
                    <button class="btn btn-warning col-1" type="submit">Create Keep</button>
                  </form>
                </div>
              </div>
    <div class="row">
<div class="col-3  mb-2 mt-2" v-for="keep in userKeeps" :key="keep.id">
        <div class="card round-border bd-round">
            <img :src="keep.img" class="card-img-top" :alt="keep.name">
            <div class="card-body">
                <h4 class="card-title">{{keep.name}}</h4>
                <p class="card-text">{{keep.description}}</p>
                <p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}   <i class="far fa-eye"></i>: {{keep.views}}   <i class="fas fa-bookmark"></i>: {{keep.shares}}</p>
                <p><span @click="deleteKeeps({id: keep.id, userId: keep.userId})"><i class="fas fa-trash-alt"></i>&nbsp;</span>
                <span @click="editVisible = !editVisible" ><i class="fas fa-edit"></i> &nbsp;</span>
                <span @click="addVisible = !addVisible"><i class="fas fa-folder-plus"></i></span></p>
                <span v-if="addVisible" v-for="vault in vaults" :key="vault.id" class="d-flex justify-content-around">
                  <button class="btn btn-success mt-1 mb-1" @click="addToVault({keepId: keep.id, vaultId: vault.id})">{{vault.name}}</button>
                </span>
                <span v-if="editVisible" class="">
                  <form @submit.prevent="editNameKeep(keep.id)" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="nameKeep" placeholder="Title"> <button class="btn btn-success col-2 form-control">+</button> </form>
                  <form @submit.prevent="editDescriptionKeep(keep.id)" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="nameKeep" placeholder="Description"> <button class="btn btn-success col-2 form-control">+</button> </form>
                  <form @submit.prevent="editViewKeep(keep.id)" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="nameKeep" placeholder="Private/Public"> <button class="btn btn-success col-2 form-control">+</button> </form>
                </span>
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
      addVisible: false,
      editVisible: false,
      isPrivate: 0
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
      let keepData = {
        name: this.keepName,
        description: this.keepDescription,
        userId: this.user.id,
        img: this.keepImg,
        isPrivate: this.isPrivate
      };
      this.$store.dispatch("createKeeps", keepData);
      this.keepName = "";
      this.keepDescription = "";
      this.keepImg = "";
    },
    addToVault(data) {
      let vaultKeepData = {
        keepId: data.keepId,
        vaultId: data.vaultId,
        userId: this.user.id
      };
      this.$store.dispatch("makeVaultKeeps", vaultKeepData);
    },
    editNameKeep(keepId) {},
    editDescriptionKeep(keepId) {},
    editPrivateKeep(keepId) {}
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