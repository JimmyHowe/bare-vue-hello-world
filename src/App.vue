<template>
  
  <div class="text-red-500">
  
  <h1>Content Tsst</h1>

  <div>
  
  <button @click="fullScreenToggle">
    Test Full Screen
  </button>

  <pre>{{fullScreen}}</pre>
  
  </div>
  
  </div>

</template>

<script>

import {ref, watch} from "vue";

export default {
  
  components: {},

  setup()
  {
    const debug = ref([]);

    function log(message)
    {
      debug.value.push(message);
    }

    // Full Screen

    const fullScreen = ref(false);

    watch(fullScreen, (current, prev) => {

      console.log(current, prev);

        if(current === true)
        {
          var promise = document.body.requestFullscreen().catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
        } else {
          exitFullscreen();
        }
    });

    function fullScreenToggle()
    {
      fullScreen.value = !fullScreen.value
    }

    return {
      debug,
      fullScreen,
      fullScreenToggle
      }
  }
}
</script>

<style>

</style>
