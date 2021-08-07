const { createApp } = require('vue');
import App from './App.vue';

const vue = createApp(App).mount('#app');

if ('keyboard' in navigator && 'lock' in navigator.keyboard) {
  console.log('Navigation lock is enabled');
}
