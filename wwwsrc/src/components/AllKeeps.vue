<template>
    <div class="keep row">
        <div class="col-3 mt-4" v-for="keep in keeps" :key="keep.id" v-if="keep.isPrivate == 0" >
            <div class="card">
               <img :src="keep.img" class="card-img-top" :alt="keep.name">
                <div class="card-body">
                    <h4 class="card-title">{{keep.name}}</h4>
                    <p class="card-text">{{keep.description}}</p>
                    <p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}&nbsp; <i class="far fa-eye"></i>: {{keep.views}} &nbsp; <i class="fas fa-share"></i>: {{keep.shares}}</P>
                    <p>
                        <span @click="addVisible = !addVisible"><i class="fas fa-folder-plus"></i></span>&nbsp;
                        <span v-if="userId == keep.userId"><i class="fas fa-trash-alt"></i></span>
                    </p>
                    <span v-if="addVisible" v-for="vault in vaults" :key="vault.id" class="d-flex justify-content-around">
                        <button class="btn btn-success mt-1 mb-1" @click="addToVault({vaultKeep:{keepId: keep.id, vaultId: vault.id}, keepData: {id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name:keep.name}})">{{vault.name}}</button>
                    </span>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "allkeeps",
  data() {
    return {
      addVisible: false
    };
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
    },
    keeps() {
      return this.$store.state.keeps;
    }
  },
  methods: {
    addToVault(data) {
      let vaultKeepData = {
        keepId: data.vaultKeep.keepId,
        vaultId: data.vaultKeep.vaultId,
        userId: this.userId
      };
      this.$store.dispatch("makeVaultKeeps", vaultKeepData);
      data.keepData.keeps += 1;
      UpdateKeeps(keepData);
    },
    UpdateKeeps(keepData) {
      this.$store.dispatch("updateUserKeeps", keepData);
    }
  },
  props: ["userId"]
};
</script>
