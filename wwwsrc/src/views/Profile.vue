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
            <div class="col-"><h1>Hello {{user.username}}</h1></div>
        </div>
        <div class="row">
            <div class="col-12"><h1>My Keeps</h1></div>
            <div class="col-12"><MyKeeps/></div>
        </div>
        <div class="row">
            <div class="col-12"><h1>My Vaults</h1></div>
            <div class="col-12"><MyVaults/></div>
        </div>
    </div>
</template>

<script>
import MyKeeps from "@/components/MyKeeps";
import MyVaults from "@/components/MyVaults";
export default {
  name: "profile",
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
  components: {
    MyKeeps,
    MyVaults
  }
};
</script>

<style>
</style>
