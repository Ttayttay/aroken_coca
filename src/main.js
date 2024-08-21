import './assets/scss/main.scss';

// components
import { useTheme } from './js/components/theme.js';
import { useBurger } from './js/components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './js/components/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
