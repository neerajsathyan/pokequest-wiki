<template>
  <transition name="view">
    <router-view />
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="postcss">
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  overflow: hidden;
  background-color: hsl(40,63%,86%);
  -webkit-tap-highlight-color: transparent;
}

* {
  user-select: none;
}

input, textarea {
  user-select: text;
}

::-webkit-scrollbar {
  display: block;
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: hsla(50,0%,100%,0.75);
}
::-webkit-scrollbar-thumb:active {
  background-color: hsla(50,0%,80%,0.75);
}

.view-enter-active, .view-leave-active {
  transition: all .2s ease;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
</style>
