import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import App from "@/App";

import { transformSqlToJava } from "../../src/utils";

describe("App.vue", () => {
  it("has a SQL editor", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.contains("#sql-editor"));
  });

  it("has a Java editor", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.contains("#java-editor"));
  });
});

describe("transformSqlToJava", () => {
  it("should transform a single line of SQL to Java", () => {
    const sqlCode = "-- Example SQL code";
    const javaCode = `String query = "-- Example SQL code";`;
    expect(transformSqlToJava(sqlCode)).to.equal(javaCode);
  });

  it("should transform two lines of SQL to Java", () => {
    const sqlCode = `-- Example line\n-- Example line 2`;
    const javaCode = `String query = "-- Example line "\n + "-- Example line 2";`;
    expect(transformSqlToJava(sqlCode)).to.equal(javaCode);
  });

  it("should transform multiple lines of SQL to Java", () => {
    const sqlCode = `-- Example line\n-- Example line 2\n-- Example line 3`;
    const javaCode = `String query = "-- Example line "\n + "-- Example line 2 "\n + "-- Example line 3";`;
    expect(transformSqlToJava(sqlCode)).to.equal(javaCode);
  });
});
