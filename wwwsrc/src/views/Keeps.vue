<template>
<div class="keeps container-fluid">
        <nav class="navbar row yellow-bg">
          <div class="col-2 mt-2 mb-2">
            <router-link class="navbar-brand" to="/"><a>KEEPR</a></router-link>
          </div>
          <div class="col-6 mt-2 mb-2">
            <router-link to="/profile"><a>DashBoard</a></router-link> |
            <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
            <router-link to="/profile/vaults"><a>My Vaults</a></router-link>
          </div>
          <div class="col-2 mt-2 mb-2">
            <button @click="logout" class="btn btn-danger">Logout</button>
          </div>
        </nav>
        <div class="row mt-2 mb-2">
                <div class="col-12"><h2>My Keeps</h2></div>
                <div class="col-12">
                 <form class="form-inline row d-flex justify-content-around" @submit.prevent="createKeep">
                    <input class="form-control p-2 col-2" type="text" v-model="keepName" placeholder="Title">
                    <input class="form-control p-2 col-4" type="text" v-model="keepDescription" placeholder="Description">
                    <input class="form-control p-2 col-2" type="text" v-model="keepImg" placeholder="Img">
                    <div class="col-1">
                    <label for="private">Private?</label> <input type="checkbox" name="private" class="form-control" unchecked>
                    </div>
                    <button class="btn btn-warning col-1" type="submit"><i class="fas fa-plus"></i></button>
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
                <p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}   <i class="far fa-eye"></i>: {{keep.views}} </p>
                <p><span @click="deleteKeeps({id: keep.id, userId: keep.userId})"><i class="fas fa-trash-alt clickable"></i>&nbsp;</span>
                <span @click="makeEditVisible(keep.id)" ><i class="fas fa-edit clickable"></i> &nbsp;</span>
                <span @click="makeAddVisible(keep.id)"><i class="fas fa-folder-plus clickable"></i></span></p>
                <span v-if="addVisible == keep.id" v-for="vault in vaults" :key="vault.id" class="d-flex justify-content-around">
                  <button class="btn btn-success mt-1 mb-1" @click="addToVault({vaultKeep:{keepId: keep.id, vaultId: vault.id}, keepData:{id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name: keep.name, username: keep.username}})">{{vault.name}}</button>
                </span>
                <span v-if="editVisible == keep.id" class="">
                  <form @submit.prevent="editNameKeep({id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name: nameKeep, username: keep.username})" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="nameKeep" placeholder="Title"> <button class="btn btn-success col-2 form-control" type="submit">+</button> </form>
                  <form @submit.prevent="editDescriptionKeep({id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: descripKeep, isPrivate: keep.isPrivate, name: keep.name, username: keep.username})" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="descripKeep" placeholder="Description"> <button class="btn btn-success col-2 form-control">+</button> </form>
                  <form @submit.prevent="editViewKeep({id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: privateKeep, name: keep.name, username: keep.username})" class="form-inline row d-flex justify-content-around mt-1 mb-1"><input type="text" class="col-8 form-control" v-model="privateKeep" placeholder="Private/Public"> <button class="btn btn-success col-2 form-control">+</button> </form>
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
      isPrivate: 0,
      nameKeep: "",
      descripKeep: "",
      privateKeep: ""
    };
  },
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$store.state.user.id);
    this.$store.dispatch("getUserVaults", this.$store.state.user.id);
    this.$store.dispatch("getAllKeeps");
  },
  created() {
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    makeEditVisible(keepId) {
      if (keepId != this.editVisible) {
        this.editVisible = keepId;
      } else {
        this.editVisible = "";
      }
    },
    makeAddVisible(keepId) {
      if (keepId != this.addVisible) {
        this.addVisible = keepId;
      } else {
        this.addVisible = "";
      }
    },
    deleteKeeps(keepData) {
      this.$store.dispatch("deleteKeeps", keepData);
    },
    createKeep() {
      if (document.getElementsByName("private")[0].checked) {
        this.isPrivate = 1;
      }
      let keepData = {
        name: this.keepName,
        description: this.keepDescription,
        username: this.user.username,
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
      debugger;
      let vaultKeepData = {
        keepId: data.vaultKeep.keepId,
        vaultId: data.vaultKeep.vaultId,
        userId: this.user.id
      };
      this.$store.dispatch("makeVaultKeeps", vaultKeepData);
      data.keepData.keeps += 1;
      this.updateKeeps(data.keepData);
    },
    updateKeeps(keepData) {
      this.$store.dispatch("updateUserKeep", keepData);
    },
    editNameKeep(keepData) {
      this.$store.dispatch("updateUserKeep", keepData);
      this.nameKeep = "";
    },
    editDescriptionKeep(keepData) {
      this.$store.dispatch("updateUserKeep", keepData);
      this.descripKeep = "";
    },
    editPrivateKeep(keepData) {
      this.$store.dispatch("updateUserKeep", keepData);
      this.privateKeep = "";
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