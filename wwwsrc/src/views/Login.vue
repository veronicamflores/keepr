<template>
    <div class="login container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
        <h1>KEEPR</h1>
      </div>
      <div class="col-6">
        <img src="../assets/artSupplies.jpg" alt="" class="img-fluid bd-round">
      </div>
        <div class="col-12 d-flex justify-content-center">
        <form v-if="loginForm" @submit.prevent="loginUser">
            <input type="email" v-model="creds.email" placeholder="email" class="form-control mt-1 mb-1">
            <input type="password" v-model="creds.password" placeholder="password" class="form-control mt-1 mb-1">
            <button type="submit" class="btn btn-success">Login</button>
        </form>
        <form v-else @submit.prevent="register">
            <input type="text" v-model="newUser.username" placeholder="name" class="form-control mt-1 mb-1">
            <input type="email" v-model="newUser.email" placeholder="email" class="form-control mt-1 mb-1">
            <input type="password" v-model="newUser.password" placeholder="password" class="form-control mt-1 mb-1">
            <button type="submit" class="btn btn-success">Create Account</button>
        </form>
        </div>
        <div @click="loginForm = !loginForm" class="col-12 d-flex justify-content-center mt-1">
            <p v-if="loginForm">No account Click to Register</p>
            <p v-else>Already have an account click to Login</p>
        </div>
        <div class="col-12">
          <router-link :to="{name: 'home'}">No Thanks Just Browsing</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "login",
  mounted() {
    //checks for valid session
    this.$store.dispatch("authenticate");
  },
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        username: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  }
};
</script>
<style>
h1 {
  color: #f8c43a;
  font-size: 5rem;
}
</style>
