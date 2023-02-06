import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import FilmView from "@/views/FilmView.vue";
import NavFooterView from "@/views/NavFooterView.vue";
import StudioView from "@/views/StudioView.vue";
import StoryView from "@/views/StoryView.vue";

const routes = [
  {
    path: "/",
    name: "navFooter",
    component: NavFooterView,
    children: [
      {
        path: "/",
        name: "main",
        component: MainView,
      },
      {
        path: "/film",
        name: "film",
        component: FilmView,
      },
      {
        path: "/story",
        name: "story",
        component: StoryView,
      },
    ],
  },
  {
    path: "/studio",
    name: "studio",
    component: StudioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
