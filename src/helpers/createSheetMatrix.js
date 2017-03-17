const createSheetMatrix = (rows, columns) => {
  let result = [];
  for (var i = 0; i < rows; i++) {
    result.push(new Array(columns).fill(''));
  }

  return result;
}

export default createSheetMatrix;