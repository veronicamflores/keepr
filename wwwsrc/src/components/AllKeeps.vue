<template>
    <div class="keep row">
        <div class="col-3 mt-4" v-for="keep in keeps" :key="keep.id" >
            <div class="card" v-if="keep.isPrivate == 0">
               <img :src="keep.img" class="card-img-top" :alt="keep.name">
                <div class="card-body">
                    <h4 class="card-title">{{keep.name}}</h4>
                    <p class="card-text">{{keep.description}}</p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    keeps() {
      return this.$store.state.keeps;
    }
  }
};
</script>
