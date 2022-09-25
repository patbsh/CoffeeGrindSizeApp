import './bootstrap';
window.Form = Form;

import Form from './form';
import { createApp } from 'vue/dist/vue.esm-bundler';

import GrindSizeComponent from './components/GrindSizeComponent.vue';
import GrinderDetailsComponent from './components/GrinderDetailsComponent.vue';
import GrinderReportFormComponent from './components/GrinderReportFormComponent.vue';
import NewGrinderFormComponent from './components/NewGrinderFormComponent.vue';

const app = createApp({});

app.component('grind-size-component', GrindSizeComponent);
app.component('grinder-details-component', GrinderDetailsComponent);
app.component('grinder-report-form-component', GrinderReportFormComponent);
app.component('new-grinder-form-component', NewGrinderFormComponent);

app.mount("#app");
