const ast = {
  body: [
    'statement1',
    'statement2',
    'statement3'
  ]
}
function expandAllStatements() {
  let allStatements = []
  ast.body.forEach(statement => {
    let statements = expandStatement(statement);
    allStatements.push(...statements)

    //allStatements.push(statement)
  });
  return allStatements
}
function expandStatement(statement) {
  return [statement];
}