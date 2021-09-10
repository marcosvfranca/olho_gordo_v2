<template>
  <div
    class="bg-cover bg-center h-screen"
    :style="{ backgroundImage: 'url(' + require('@/assets/bg-header.jpg') + ')' }"
  >
    <FlexCenter class="pt-10">
      <img src="../assets/brand.png">
    </FlexCenter>
    <FlexCenter class="mt-10 p-20 pt-5 sm:p-52 sm:pt-10 lg:max-w-2xl lg:p-40 lg:pt-10 lg:block lg:ml-auto lg:mr-auto">
      <img src="../assets/yellow_square.png">
    </FlexCenter>
    <FlexCenter>
      <div class="absolute bottom-0 mb-5">
        <img
          src="../assets/arrows.png"
          class="w-10 sm:w-12"
        >
      </div>
    </FlexCenter>
  </div>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue';

export default ({
  components: {
    FlexCenter
  }
});
</script>
