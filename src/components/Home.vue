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
import Header from './Header.vue';
import BackGroundBlack from './BackGroundBlack.vue';
import WhoWheAre from './WhoWheAre.vue';
import Photography from './Photography.vue';
import Footage from './Footage.vue';
import SocialMediaManagement from './SocialMediaManagement.vue';
import WhoHasWorkedWithUs from './WhoHasWorkedWithUs.vue';
import Footer from './Footer.vue';

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
