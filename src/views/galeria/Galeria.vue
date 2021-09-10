<template>
  <BackGroundBlack>
    <TopLogo />
    <section id="photos" class="mt-10">
        <img v-for="(item, index) in images" :key="index" :src="item" class="cursor-pointer hover:opacity-70 transition-opacity delay-100" />
    </section>
  </BackGroundBlack>
</template>

<script lang="ts">
import BackGroundBlack from '../../components/BackGroundBlack.vue';
import TopLogo from '../../components/TopLogo.vue';

function importAll(r) {
  return r.keys().map(r);
}

export default {
  components: {
    BackGroundBlack,
    TopLogo,
  },
  data() {
    return {
      images: importAll(
        require.context('@/assets/galery/', false, /\.(png|jpe?g|svg)$/)
      ),
    };
  },
};
</script>
<style scoped>
#photos {
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap: 0px;
  -moz-column-count: 3;
  -moz-column-gap: 0px;
  column-count: 3;
  column-gap: 0px;
}

#photos img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
}

@media (max-width: 1000px) {
  #photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  #photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 400px) {
  #photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
}
</style>
