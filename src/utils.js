export function transformSqlToJava(sqlCode) {
  const splitIntoLines = sqlCode.split("\n");
  let javaCode = "";
  let lastIndex;
  switch (splitIntoLines.length) {
    case 1:
      javaCode = `String query = "${sqlCode}";`;
      break;
    case 2:
      javaCode = `String query = "${splitIntoLines[0].trim()} "\n`;
      javaCode += ` + "${splitIntoLines[1].trim()}";`;
      break;
    default:
      lastIndex = splitIntoLines.length - 1;
      javaCode = `String query = "${splitIntoLines[0].trim()} "\n`;
      for (var i = 1; i < lastIndex; i++) {
        javaCode += ` + "${splitIntoLines[i].trim()} "\n`;
      }
      javaCode += ` + "${splitIntoLines[lastIndex].trim()}";`;
      break;
  }
  return javaCode;
}
