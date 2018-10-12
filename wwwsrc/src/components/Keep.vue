<template>
<transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal">
    <header class="modal-header">
        <slot class="header d-flex justify-content-between">
            <p><strong>{{keep.name}}</strong></p> &nbsp; &nbsp; <p>Author: {{keep.username}}</p>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div> <img :src="keep.img" :alt="keep.name" class="img-fluid mod-img"></div>
            <div class="border mt-1 mb-1"><p><strong>Description</strong></p> <p>{{keep.description}}</p></div>
            <div><p><i class="fas fa-thumbtack"></i>: {{keep.keeps}}&nbsp; <i class="far fa-eye"></i>: {{keep.views}} &nbsp;</p></div>
            <span @click="makeAddVisible(keep.id)"><h3><i class="fas fa-folder-plus"></i></h3></span>
            <span v-if="addVisible == keep.id" v-for="vault in vaults" :key="vault.id" class="d-flex justify-content-around">
                <button class="btn btn-success mt-1 mb-1" @click="addToVault({vaultKeep:{keepId: keep.id, vaultId: vault.id}, keepData: {id: keep.id, userId: keep.userId, keeps: keep.keeps, views:keep.views, img: keep.img, description: keep.description, isPrivate: keep.isPrivate, name:keep.name,username: keep.username}})">{{vault.name}}</button>
            </span>
            <p>Author: {{keep.username}}</p>
            <button class="btn btn-secondary mt-1 mb-1 btn-sm" type="submit" @click="close">X</button>
        </slot>
        </div>
    </div>

</div>
</transition>
</template>
<script>
export default {
  name: "modal",
  props: ["keep"],
  data() {
    return {
      addVisible: ""
    };
  },
  computed: {
    vaults() {
      return this.$store.state.vaults;
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
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: relative;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  /* max-width: 40%; */
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #78c2ad;
  color: #4aae9b;
  justify-content: center;
}
.modal-footer {
  border-top: 1px solid #78c2ad;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.clickable:hover {
  cursor: pointer;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.75s ease;
}

.mod-img {
  height: auto;
  width: 15rem;
}
</style>