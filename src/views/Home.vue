<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Header />
  <BackGroundBlack>
    <WhoWheAre />
    <Photography />
    <Footage />
    <SocialMediaManagement />
    <WhoHasWorkedWithUs />
    <Footer />
  </BackGroundBlack>
</template>

<script lang="ts">
import Header from '../components/Header.vue';
import BackGroundBlack from '../components/BackGroundBlack.vue';
import WhoWheAre from '../components/WhoWheAre.vue';
import Photography from '../components/Photography.vue';
import Footage from '../components/Footage.vue';
import SocialMediaManagement from '../components/SocialMediaManagement.vue';
import WhoHasWorkedWithUs from '../components/WhoHasWorkedWithUs.vue';
import Footer from '../components/Footer.vue';

export default ({
  components: {
    Header,
    BackGroundBlack,
    WhoWheAre,
    Photography,
    Footage,
    SocialMediaManagement,
    WhoHasWorkedWithUs,
    Footer
  }
});
</script>
