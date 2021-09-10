<template>
  <FlexCenter class="flex-col">
    <ImageTitle :src="imageTitleSrc" />
    <DefaultText>
      O Olho Gordo é uma empresa de marketing de conteúdo especializada em gastronomia, já atendemos diversas empresas de diversos segmentos gastronômicos, sempre gerando desejo e consequentemente, aumentando interação e vendas!
    </DefaultText>
  </FlexCenter>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue';
import DefaultText from './DefaultText.vue';
import ImageTitle from './ImageTitle.vue';

export default ({
    components: {
        FlexCenter,
        DefaultText,
        ImageTitle
    },
    data() {
        return {
            imageTitleSrc: require('../assets/who_whe_are.png')
        };
    }
});
</script>
