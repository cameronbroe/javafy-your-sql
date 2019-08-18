<template>
  <div id="app">
    <SqlEditor />
    <JavaEditor />
  </div>
</template>

<script>
import SqlEditor from "./components/SqlEditor";
import JavaEditor from "./components/JavaEditor";

export default {
  name: "app",
  components: {
    SqlEditor,
    JavaEditor
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: stretch;
  margin: 0;
}
</style>
