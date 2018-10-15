<template>
  <div class="home container-fluid">
    <nav class="navbar row yellow-bg">
        <div class="col-4 mt-2 mb-2">
          <router-link class="navbar-brand" to="/"><a>KEEPR</a></router-link>
        </div>
        <!-- <div class="col-8 mt-2 mb-2">
          <form class="form-inline md-form form-sm" @sumbit.prevent="search()">
            <input class="form-control form-control-md w-100" type="text" placeholder="Search" aria-label="Search" v-model="searchTerm">
          </form>
        </div> -->
        <div class="col-8 mt-2 mb-2" v-if="user.id == null ">
          <router-link to="/login"><a>Login/Register</a></router-link>
        </div>
        <div class="col-8 mt-2 mb-2" v-else>
          <router-link to="/profile"><a>DashBoard</a></router-link> |
          <router-link to="/profile/keeps"><a>My Keeps</a></router-link> | 
          <router-link to="/profile/vaults"><a>My Vaults</a></router-link> | 
          <a @click="logout" href=""><strong>LogOut</strong></a>
        </div>
    </nav>
    <div class="row">
      <div class="col-12">
        <AllKeeps :userId="user.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import AllKeeps from "@/components/AllKeeps";
export default {
  name: "home",
  data() {
    return {
      searchTerm: ""
    };
  },
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
    this.$store.dispatch("authenticate");
    //blocks users not logged in
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
    // search() {
    //   if(this.searchTerm)
    // }
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
