<template>
  <img
    :src="src"
    class="p-5 pt-10 sm:w-8/12 sm:block sm:ml-auto sm:mr-auto lg:w-5/12"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: String
    }
});
</script>
