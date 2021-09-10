<template>
    <FlexCenter class="flex-col">
        <ImageTitle :src="imageTitleSrc" />
        <DefaultText>
            Nós sabemos da correria de quem cozinha e trabalha com gastronomia, não tem tempo de cuidar da vida digital da sua empresa? Nós cuidamos para você!
        </DefaultText>
        <DefaultText>
            Nossa equipe tem especialistas em design gráfico para fazermos artes promocionais, direcionamento de público e organização de conteúdo!
        </DefaultText>
        <DefaultText>
            Além disso, também fazemos seu tráfego pago, para que sua marca alcance cada vez mais pessoas!
        </DefaultText>
    </FlexCenter>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue'
import DefaultText from './DefaultText.vue'
import ImageTitle from './ImageTitle.vue'

export default ({
    components: {
        FlexCenter,
        DefaultText,
        ImageTitle
    },
    data () {
        return {
            imageTitleSrc: require('../assets/social_media_management.png')
        }
    }
})
</script>
