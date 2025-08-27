// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

type Req = { params?: { num?: string } };
type Res = { send: (body: string) => unknown };

export default (req: Req, res: Res): void => {
  const numStr: string = req.params?.num ?? "";
  const n: number = Number.parseInt(numStr, 10);

  let result: string;

  if (!Number.isFinite(n)) {
    result = "fibonacci(?) is undefined";
  } else {
    const fibN = (fibonacci as (k: number) => number)(n);
    result = fibN < 0
      ? `fibonacci(${n}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;
  }

  res.send(result);
};
