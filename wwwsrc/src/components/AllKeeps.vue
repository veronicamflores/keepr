<template>
    <div class="keep row">
        <div class="col-md-3 col-sm-6 col-xs-12 mt-4" v-for="keep in keeps" :key="keep.id" >
            <div class="card bd-round">
               <img :src="keep.img" class="card-img-top" :alt="keep.name">
                <div class="card-body">
                    <h4 class="card-title">{{keep.name}}</h4>
                    <p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}&nbsp; <i class="far fa-eye"></i>: {{keep.views}} &nbsp;</p>
                    <p>
                      <span v-if="userId != null" @click="makeAddVisible(keep.id)"><i class="fas fa-folder-plus clickable"></i></span>&nbsp;
                      <span @click="showModal({id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name:keep.name, username: keep.username})"><i class="far fa-eye clickable"></i></span>
                      <modal v-show="isModalVisible == keep.id" @close="closeModal" :keep="keep" :userId="userId"></modal>
                    </p>
                    <span v-if="addVisible == keep.id" v-for="vault in vaults" :key="vault.id" class="d-flex justify-content-around">
                        <button class="btn btn-success mt-1 mb-1" @click="addToVault({vaultKeep:{keepId: keep.id, vaultId: vault.id}, keepData: {id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name:keep.name, username: keep.username}})">{{vault.name}}</button>
                    </span>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/components/Keep.vue";
export default {
  name: "allkeeps",
  data() {
    return {
      addVisible: "",
      isModalVisible: ""
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
    makeAddVisible(keepId) {
      if (keepId != this.addVisible) {
        this.addVisible = keepId;
      } else {
        this.addVisible = "";
      }
    },
    addToVault(data) {
      let vaultKeepData = {
        keepId: data.vaultKeep.keepId,
        vaultId: data.vaultKeep.vaultId,
        userId: this.userId
      };
      this.$store.dispatch("makeVaultKeeps", vaultKeepData);
      data.keepData.keeps += 1;
      this.updateKeeps(data.keepData);
    },
    updateKeeps(keepData) {
      this.$store.dispatch("updateUserKeep", keepData);
    },
    showModal(data) {
      this.isModalVisible = data.id;
      data.views += 1;
      this.updateKeeps(data);
    },
    closeModal() {
      this.isModalVisible = "";
    }
  },
  components: {
    modal
  },
  props: ["userId"]
};
</script>
<style>
.clickable:hover {
  cursor: pointer;
}
</style>

