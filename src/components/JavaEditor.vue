<template>
  <div class="container" id="java-editor">
    <MonacoEditor
      v-model="transformedCode"
      class="java-monaco-editor"
      theme="vs-dark"
      language="java"
      :options="editorOptions"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";
import store from "@/store";
import { transformSqlToJava } from "@/utils";

export default {
  components: {
    MonacoEditor
  },
  name: "JavaEditor",
  data: function() {
    return {
      sharedState: store.state,
      editorOptions: {
        minimap: {
          enabled: false
        },
        readOnly: true
      }
    };
  },
  computed: {
    transformedCode: function() {
      return transformSqlToJava(this.sharedState.code);
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  text-align: left;
}

.java-monaco-editor {
  height: 100vh;
  width: 100%;
}
</style>
