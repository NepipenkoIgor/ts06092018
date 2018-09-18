// 1
function isInArray(array: any[], ...items: any[]): boolean {
  return items.every((value: any) => array.includes(value));
}


// 2
type Operand = string | number;

type Operation = (leftOp: Operand, rightOp: Operand) => Operand;

const plus: Operation = (leftOp: Operand, rightOp: Operand) => {
 if (typeof leftOp === 'string' || typeof rightOp === 'string') {
  return leftOp as string + rightOp as string;
 }

 return leftOp as number + rightOp as number;
};

function summator(...operands: Operand[]): Operand {
  return operands.reduce((accumulator: Operand, current: Operand) => plus(accumulator, current));
}


// 3
function getUnique(...array: any[]): any[] {
  const anySet: Set<any> = new Set(array);
  const uniqueElementsArray: any[] = [];

  anySet.forEach((value: any) => uniqueElementsArray.push(value));
  return uniqueElementsArray;
}


// 4
function toMatrix(data: any[], rowSize: number): any[] {
  if (rowSize <= 0) {
    throw 'argument rowSize must be positive';
  }

  let it: number = 0;
  const matrixSize: number = Math.ceil(data.length / rowSize);
  const matrix: any[] = new Array(matrixSize).fill(undefined);

  return matrix.map(() => {
    const row: any[] = new Array(rowSize);

    const slicedData: any[] = data.slice(it, it += rowSize);
    slicedData.forEach((value: any, index) => row[index] = value);

    return row;
  });
}
