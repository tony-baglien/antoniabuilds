<script setup>
import Hero from "../components/Hero.vue"
import Wrapper from "../components/Wrapper.vue"
import Button from "../components/Button.vue"
import Container from "../components/Container/Container.vue"
import ContainerHeader from "../components/Container/ContainerHeader.vue"
import ContainerSection from "../components/Container/ContainerSection.vue"

const links = {
  'hacktype': 'https://hack-type.onrender.com',
  'reactMeals': 'https://react-meals-fr.onrender.com',
  'keyworks': 'https://keyworks.onrender.com'
}
const gitLinks = {
  'antoniaBuilds': 'https://github.com/tony-baglien/antoniabuilds',
  'hacktype': 'https://github.com/tony-baglien/hack-type-vite',
  'reactMeals': 'https://github.com/tony-baglien/react-meals',
  'keyworks': 'https://github.com/tony-baglien/keyworks-frontend'
}


</script>
<template>
  <main>
    <Hero />
    <section id="projects" class="flex flex-col gap-12 items-center justify-center lg:px-[20%]
      ">
      <Container>
        <ContainerHeader :link="gitLinks.antoniaBuilds" header="AntoniaBuilds.dev" />
        <ContainerSection header="Infrastructure Setup">
          <div class="flex flex-col gap-2 lg:ml-6">
            <Wrapper>
              <h2 class="font-header text-xl">Linode VPS</h2>
              <p>Provisioned Ubuntu 22.04 server</p>
            </Wrapper>
            <Wrapper>
              <h2 class="font-header text-xl">Domain DNS</h2>
              <p> Configured domain pointed to server IP with Proper A records </p>
            </Wrapper>
            <Wrapper>
              <h2 class="font-header text-xl">SSL Certificate</h2>
              <p>Implemented a Let's Encrypt SSL with automatic renewal via certbot</p>
            </Wrapper>
            <Wrapper>
              <h2 class="font-header text-xl">NGINX Config</h2>
              <p>Set up reverse proxy, gzip compression and security headers</p>
            </Wrapper>
          </div>
        </ContainerSection>
        <div class="flex flex-col md:flex-row lg:gap-8">
          <ContainerSection header="Admin Authentication" :icons="[['fas', 'fa-database'], ['fab', 'fa-vuejs']]">
            <Wrapper>
              <p>Login interface with database validation and password hashing. Vue Router guards to protect admin
                route.
              </p>
            </Wrapper>
          </ContainerSection>
          <ContainerSection header="CI/CD" :icons="[['fas', 'fa-diagram-project']]">
            <Wrapper>
              <p>Streamlined deployment pipeline that triggers on code commits, builds the application and deploys on
                Linode</p>
            </Wrapper>
          </ContainerSection>
        </div>
        <ContainerSection header="Frontend Framework" :icons="[['fab', 'fa-css'], ['fab', 'fa-vuejs']]">
          <Wrapper>
            Built in Vue for a reactive component acrchitecture (also cause I wanted to try it out) and tailwind CSS for
            rapid styling and responsive design
          </Wrapper>
        </ContainerSection>
      </Container>
      <Container>
        <ContainerSection header="React Meals">
          <p>A food ordering page where users can browse meals, add then to cart and place orders. All managed with a
            simple database back end.</p>
          <div class="flex flex-col md:flex-row align-center gap-4 mt-4">
            <a :href="gitLinks.reactMeals"
              target="_blank" 
              rel="noopener noreferrer"
              class="transform transition-all duration-200 ease-in-out hover:-translate-y-0.5 opacity-85 hover:opacity-100">
              <font-awesome-icon class="text-3xl" :icon="['fab', 'github']" />
            </a>
            <Button :link="links.reactMeals" content="Live Demo"></Button>
          </div>
        </ContainerSection>
      </Container>
      <Container>
        <ContainerSection header="Keyworks">
          <p>A vibrant showcase for mechanical keyboard components - keycaps, switches, and full kits and advanced
            filtering</p>
          <div class="flex flex-col md:flex-row align-center gap-4 mt-4">
            <a :href="gitLinks.keyworks"
              target="_blank" 
              rel="noopener noreferrer"
              class="transform transition-all duration-200 ease-in-out hover:-translate-y-0.5 opacity-85 hover:opacity-100">
              <font-awesome-icon class="text-3xl" :icon="['fab', 'github']" />
            </a>
            <Button :link="links.keyworks" content="Live Demo"></Button>
          </div>
        </ContainerSection>
      </Container>
      <Container>
        <ContainerSection header="Hacktype">
          <p>A charming autotype page inspired by hackertyper.net. Have fun auto typing like a l33t h@x0r</p>
          <div class="flex flex-col md:flex-row align-center gap-4 mt-4">
            <a :href="gitLinks.hacktype"
              target="_blank" 
              rel="noopener noreferrer"
              class="transform transition-all duration-200 ease-in-out hover:-translate-y-0.5 opacity-85 hover:opacity-100">
              <font-awesome-icon class="text-3xl" :icon="['fab', 'github']" />
            </a>
            <Button :link="links.hacktype" content="Live Demo"></Button>
          </div>
        </ContainerSection>
      </Container>
    </section>
  </main>
</template>
