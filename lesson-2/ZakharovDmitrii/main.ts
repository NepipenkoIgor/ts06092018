type primitive = boolean | number | string;
type numstr = number | string;

function isInArray(m: primitive[], ...items: primitive[]): boolean {
    return items.every((item) => {
        return m.some((value => value === item));
    });
}

function summator(...args: numstr[]): number {
    return args.reduce((prevValue: number, currentValue: numstr) => {
        if (typeof currentValue === 'string') {
            currentValue = parseInt(currentValue);
        }
        return prevValue + currentValue;
    }, 0);
}

function getUnique(...args: primitive[]): primitive[] {
    const unique: primitive[] = [];
    args.forEach((item) => {
        if (unique.indexOf(item) === -1) {
            unique.push(item);
        }
    });
    return unique;
}

function toMatrix(data: any[], rowSize: number): any[][] | void {
    if (data.length < rowSize) {
        return;
    }

    const res: any[] = [];
    const step: number = rowSize - 1;
    const lastIdx = data.length - 1;
    let begin: number = 0;
    let end: number = step;

    while (end <= lastIdx) {
        res.push(
            data.slice(begin, end)
        );
        begin = end + 1;
        end += step;
    }

    return res;
}