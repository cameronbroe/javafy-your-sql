<template>
  <div class="container" id="sql-editor">
    <MonacoEditor
      @change="updateCode"
      v-model="sharedState.code"
      class="sql-monaco-editor"
      language="sql"
      theme="vs-dark"
      :options="editorOptions"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";
import store from "@/store";

export default {
  components: {
    MonacoEditor
  },
  name: "SqlEditor",
  data: function() {
    return {
      sharedState: store.state,
      editorOptions: {
        minimap: {
          enabled: false
        }
      }
    };
  },
  methods: {
    updateCode: function(data) {
      this.sharedState.updateCode(data);
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  text-align: left;
  flex-grow: 1;
  flex-basis: 100%;
}

.sql-monaco-editor {
  height: 100vh;
  width: 100%;
}
</style>
