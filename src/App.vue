<template>
  <Header />
  <main>
    <Hero />
    <About />
    <Experience />
    <Education />
    <Skills />
  </main>
  <Footer />
  <MobileNav />
  <ScrollTop />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Skills, Education, Experience, About, Hero } from "@/views";
import { Footer, Header, MobileNav, ScrollTop } from "@/components/general";

export default defineComponent({
  name: "App",
  components: {
    Footer,
    Header,
    Skills,
    Education,
    Experience,
    About,
    MobileNav,
    ScrollTop,
    Hero,
  },
});
</script>
