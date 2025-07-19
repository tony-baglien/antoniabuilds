// Home About Contact Projects
import Home from "../../views/Home.vue";
import About from "../../views/About.vue";
import Contact from "../../views/Contact.vue";
import Projects from "../../views/Projects.vue";

export default [
  { path: "/", component: Home, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/projects", component: Projects, name: "projects" },
];
