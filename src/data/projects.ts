import {
  CONSTRUCTOR_CALCULATOR,
  MOMENTUM,
  RS_RUSH_COVER,
  SLIDER_PUZZLE,
  SONG_BIRDS,
  TEST_VUE_TASK_LEAD,
  TRAVEL_LANDING,
} from "../constants/images";
import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "RS-RUSH",
    description: "Education platform for learn JS",
    link: "https://rs-rush.netlify.app/",
    image: RS_RUSH_COVER,
  },
  {
    id: 2,
    title: "Calculator-Constructor",
    description: "D&B calculator React",
    link: "https://alexeitim.github.io/react-calculator-drag-and-drop/dist/",
    image: CONSTRUCTOR_CALCULATOR,
  },
  {
    id: 3,
    title: "Song-bird",
    description: "WebApp guess bird by sing",
    link: "https://rolling-scopes-school.github.io/alexeitim-JSFE2022Q3/songbird/index.html",
    image: SONG_BIRDS,
  },
  {
    id: 4,
    title: "Clone Momentum",
    description: "Clone Google momentum",
    link: "https://rolling-scopes-school.github.io/alexeitim-JSFEPRESCHOOL2022Q2/momentum/",
    image: MOMENTUM,
  },
  {
    id: 5,
    title: "Travel WebSite",
    description: "Simple landing page",
    link: "https://rolling-scopes-school.github.io/alexeitim-JSFEPRESCHOOL2022Q2/travel/",
    image: TRAVEL_LANDING,
  },
  {
    id: 6,
    title: "Slider puzzle",
    description: "Game",
    link: "https://rolling-scopes-school.github.io/alexeitim-JSFE2022Q3/codejam/dist/",
    image: SLIDER_PUZZLE,
  },
  {
    id: 7,
    title: "Lead",
    description: "Test Vue task",
    link: "https://test-task-vue-frontend.vercel.app/",
    image: TEST_VUE_TASK_LEAD,
  },
];
