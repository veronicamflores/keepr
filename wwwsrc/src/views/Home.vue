<template>
  <div class="home container-fluid">
    <nav class="navbar row yellow-bg">
        <div class="col-2 mt-2 mb-2">
          <router-link class="navbar-brand" to="/"><a>PNTRST</a></router-link>
        </div>
        <div class="col-8 mt-2 mb-2">
          <form class="form-inline md-form form-sm">
            <input class="form-control form-control-md w-100" type="text" placeholder="Search" aria-label="Search">
          </form>
        </div>
        <div class="col-2 mt-2 mb-2" v-if="user.id == null ">
          <router-link to="/login"><a>Login/Register</a></router-link>
        </div>
        <div class="col-2 mt-2 mb-2" v-else>
          <router-link to="/profile"><a>Profile</a></router-link> |
          <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
          <router-link to="/profile/vaults"><a>My Vaults</a></router-link>
        </div>
    </nav>
    <div class="row">
      <div class="col-12">
        <AllKeeps/>
      </div>
    </div>
  </div>
</template>

<script>
import AllKeeps from "@/components/AllKeeps";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.$store.dispatch("getAllKeeps");
  },
  mounted() {
    this.$store.dispatch("getUserKeeps", this.$store.state.user.id);
    this.$store.dispatch("getUserVaults", this.$store.state.user.id);
    this.$store.dispatch("getAllKeeps");
    //blocks users not logged in
  },
  components: {
    AllKeeps
  }
};
</script>
<style>
a:hover {
  color: #35d0ba;
}
a {
  color: #c93d1b;
}
.yellow-bg {
  background-color: #f8c43a;
}
</style>
