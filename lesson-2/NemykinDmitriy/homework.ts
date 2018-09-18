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

