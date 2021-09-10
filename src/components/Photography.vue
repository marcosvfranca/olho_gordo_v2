<template>
  <FlexCenter class="flex-col">
    <ImageTitle :src="require('@/assets/photography.png')" />
    <DefaultText>Nossa equipe conta com uma foodstylist, que irá pensar em todo o cenário onde seu produto será aprensentado, fazendo composições de acordo com sua necessidade!</DefaultText>
    <DefaultText>O Olho Gordo possui uma infinidade de artefatos de decoração, e tudo pode ser usado junto com seu produto, para realçar ainda mais sua beleza!</DefaultText>
    <DefaultText>Também contamos com um fotógrafo, editor e manipulador de imagens, com isso, podemos transformar as fotos do seu produto para você aplicar onde quiser!</DefaultText>
    <DefaultText>Instagram, banner, oudoor e até mesmo embalagens!</DefaultText>
    <div class="grid grid-cols-4 gap-0 mt-10">
      <img
        v-for="(item, index) in images"
        :key="index"
        :src="item"
      >
    </div>
    <div class="content-center">
      <router-link to="/galeria">
        <ImageTitle :src="imageShowMoreSrc" class="block ml-auto mr-auto w-56 -mb-14 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/>
      </router-link>
    </div>
  </FlexCenter>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue';
import DefaultText from './DefaultText.vue';
import ImageTitle from './ImageTitle.vue';

function importAll(r) {
  return r.keys().map(r);
}

const photograpy_files = importAll(require.context('../assets/photograpy/', false, /\.(png|jpe?g|svg)$/));

export default ({
  components: {
    FlexCenter,
    DefaultText,
    ImageTitle
  },
  data() {
    return {
      images: photograpy_files,
      imageTitleSrc: require('@/assets/photography.png'),
      imageShowMoreSrc: require('@/assets/show_more.png'),
    };
  },
});
</script>
