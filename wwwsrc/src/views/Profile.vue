<template>
    <div class="profile container-fluid">
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
        <div class="row">
            <div class="col-12">
              <div class="row mt-2 mb-2">
                <div class="col-3"><h2>My Keeps</h2></div>
                <div class="col-9">
                  <form class="form-inline" @submit.prevent="createKeep">
                    <input class="form-control p-2" type="text" v-model="keepName" placeholder="Keep Name">
                    <input class="form-control p-2" type="text" v-model="keepDescription" placeholder="Keep Description">
                    <input class="form-control p-2" type="text" v-model="keepImg" placeholder="Keep Img">
                    <button class="btn" type="submit">Sumbit</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12"><MyKeeps/></div>
        </div>
        <div class="row">
            <div class="col-12">
              <div class="row mt-2 mb-2">
                <div class="col-3"><h2>My Vaults</h2></div>
                <div class="col-9">
                  <form class="form-inline" @submit.prevent="createVault">
                    <input class="form-control p-2" type="text" v-model="vaultName" placeholder="Vault Name">
                    <input class="form-control p-2" type="text" v-model="vaultDescription" placeholder="Vault Description">
                    <button class="btn" type="submit">Sumbit</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12"><MyVaults/></div>
        </div>
    </div>
</template>

<script>
import MyKeeps from "@/components/MyKeeps";
import MyVaults from "@/components/MyVaults";
export default {
  name: "profile",
  data() {
    return {
      keepName: "",
      keepDescription: "",
      keepImg: "",
      vaultName: "",
      vaultDescription: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
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
    //blocks users not logged in
    if (!this.$store.state.user.id) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    createKeep() {
      let keepData = {
        name: this.keepName,
        description: this.keepDescription,
        userId: this.user.id,
        img: this.keepImg,
        isPrivate: 0
      };
      this.$store.dispatch("createKeeps", keepData);
      this.keepName = "";
      this.keepDescription = "";
      this.keepImg = "";
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
    }
  },
  components: {
    MyKeeps,
    MyVaults
  }
};
</script>

<style>
</style>
