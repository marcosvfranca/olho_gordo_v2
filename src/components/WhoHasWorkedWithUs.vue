<template>
  <FlexCenter class="flex-col">
    <ImageTitle :src="imageTitleSrc" />
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-5 items-center mx-8 sm:mx-14 lg:mx-32">
      <img
        v-for="(item, index) in images"
        :key="index"
        :src="item"
        class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 sm:w-60 sm:block sm:ml-auto sm:mr-auto sm:mb-3"
      >
    </div>
  </FlexCenter>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue';
import ImageTitle from './ImageTitle.vue';

function importAll(r) {
  return r.keys().map(r);
}

const who_has_worked_files = importAll(require.context('../assets/worked/', false, /\.(png|jpe?g|svg)$/));

export default ({
  components: {
    FlexCenter,
    ImageTitle
  },
  data() {
    return {
      images: who_has_worked_files,
      imageTitleSrc: require('../assets/who_has_worked_with_us.png')
    };
  },
});
</script>
