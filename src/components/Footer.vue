<template>
  <footer
    id="footer"
    class="relative z-50"
  >
    <div class="py-10 flex flex-col sm:flex-row justify-center items-center sm:justify-between lg:mt-10">
      <p class="focus:outline-none mt-6 sm:text-xl leading-none text-white sm:ml-10 sm:mt-0 lg:text-lg lg:ml-40">
        &copy; 2021 Todos direitos reservados |
        <span class="text-yellow-400">Olho Gordo</span>
      </p>
      <p class="mt-2 sm:mr-5 sm:mt-0 lg:mr-40">
        <ButtonSocialMedia href="https://www.facebook.com/olhoogordo/">
          <svg
            class="w-5 h-5 fill-current sm:w-6 sm:h-6 lg:w-4 lg:h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          ><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
        </ButtonSocialMedia>
        <ButtonSocialMedia href="https://www.instagram.com/olhoogordo/">
          <svg
            class="w-5 h-5 fill-current sm:w-6 sm:h-6 lg:w-4 lg:h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          ><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" /></svg>
        </ButtonSocialMedia>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import ButtonSocialMedia from './ButtonSocialMedia.vue';

export default ({
  components: {
    ButtonSocialMedia
  },
  methods: {
    getCurrentYear: () => new Date().getFullYear
  }
});
</script>
