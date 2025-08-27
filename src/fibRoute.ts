// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

type Req = { params?: { num?: unknown } };
type Res = { send: (body: string) => unknown };

export default (req: Req, res: Res): void => {
  const raw = req.params?.num;
  const numStr: string = typeof raw === "string" ? raw : String(raw ?? "");
  const n: number = Number.parseInt(numStr, 10);

  let result: string;

  if (!Number.isFinite(n)) {
    result = `fibonacci(${numStr}) is undefined`;
  } else {
    const fibN = (fibonacci as (k: number) => number)(n);
    result = fibN < 0
      ? `fibonacci(${numStr}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;
  }

  res.send(result);
};
