export default {
  state: {
    code: "-- Enter your SQL code here"
  },
  updateSqlCode(newSqlCode) {
    this.state.code = newSqlCode;
  }
};
