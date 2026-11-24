"use client";
import { useState } from "react";
import "./tailwind.css";

const OPERATIONS = [
  { value: "add", symbol: "+" },
  { value: "subtract", symbol: "−" },
  { value: "multiply", symbol: "×" },
  { value: "divide", symbol: "÷" },
];

const INPUT = "rounded border border-neutral-300 px-2 py-0.5 text-sm";

type CalculatorResponse = {
  a?: number;
  b?: number;
  operation?: string;
  result?: number;
  error?: string;
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [response, setResponse] = useState<CalculatorResponse | null>(null);

  const calculate = async () => {
    const params = new URLSearchParams({ a, b, operation });
    const res = await fetch(`/api/lab5/calculator?${params}`);
    setResponse(await res.json());
  };

  const symbol = (op?: string) =>
    OPERATIONS.find((o) => o.value === op)?.symbol ?? "?";

  return (
    <div id="wd-calculator-next-web-api">
      <h3 className="mb-4 mt-4 text-2xl font-semibold">
        Calculator (Next.js Web API)
      </h3>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor="wd-calculator-a">A:</label>
        <input
          id="wd-calculator-a"
          type="number"
          placeholder="A"
          className={INPUT}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor="wd-calculator-b">B:</label>
        <input
          id="wd-calculator-b"
          type="number"
          placeholder="B"
          className={INPUT}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <label htmlFor="wd-calculator-operation">Operation:</label>
        <select
          id="wd-calculator-operation"
          className={INPUT}
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          {OPERATIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.symbol}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        id="wd-calculator-submit"
        className="rounded border border-blue-800 bg-blue-600 px-4 py-1.5 text-sm text-white disabled:opacity-40"
        disabled={a === "" || b === ""}
        onClick={calculate}
      >
        Calculate
      </button>
      {response && (
        <p id="wd-calculator-result" className="mt-4">
          {response.error ? (
            <span className="text-red-600">{response.error}</span>
          ) : (
            <b>
              {response.a} {symbol(response.operation)} {response.b} ={" "}
              {response.result}
            </b>
          )}
        </p>
      )}
      <hr className="mt-4" />
    </div>
  );
}
