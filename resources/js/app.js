import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import TestComponent from './components/TestComponent.vue';
import GrindSizeComponent from './components/GrindSizeComponent.vue';

const app = createApp({});

app.component('test-component', TestComponent);
app.component('grind-size-component', GrindSizeComponent);

app.mount("#app");
