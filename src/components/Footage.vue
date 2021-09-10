<template>
  <FlexCenter class="flex-col">
    <ImageTitle :src="imageTitleSrc" />
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="lg:p-5">
        <DefaultText class="lg:ml-32 lg:text-justify lg:mr-5">
          Quer contar sua história? Quer que seus clientes conheçam seu ambiente?
        </DefaultText>
        <DefaultText class="lg:ml-32 lg:text-justify lg:mr-5">
          Quer mostrar todo o carinho que você tem em cozinhar? Nós também podemos te ajudar com isso!
        </DefaultText>
        <DefaultText class="lg:ml-32 lg:text-justify lg:mr-5">
          Nossa equipe conta com um filmmaker que irá registrar todos os seus momentos para dar transparência e segurança para seus clientes, além é claro, de contar lindas histórias!
        </DefaultText>
      </div>
      <div class="mt-10 mx-10 sm:mx-20 lg:mr-32 lg:mt-0 lg:mx-0">
        <iframe
          class="w-full"
          width="560"
          height="315"
          :src="iframeUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </FlexCenter>
</template>

<script lang="ts">
import FlexCenter from './FlexCenter.vue';
import DefaultText from './DefaultText.vue';
import ImageTitle from './ImageTitle.vue';
import axios from 'axios';

const apiKey = process.env.VUE_APP_YOUTUBE_API_KEY;
const channelID = process.env.VUE_APP_YOUTUBE_CHANEL_ID;
const maxResults = process.env.VUE_APP_YOUTUBE_MAX_RESULTS;

export default ({
  components: {
    FlexCenter,
    DefaultText,
    ImageTitle
  },
  data() {
    return {
      iframeUrl: null,
      imageTitleSrc: require('../assets/footage.png')
    };
  },
  mounted() {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${maxResults > 1 ? 1 : maxResults}`)
      .then(({data}) => {
        data.items.forEach(video => {
          this.iframeUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
        });
      });
  },
});
</script>