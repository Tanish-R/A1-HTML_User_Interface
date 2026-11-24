"use client";

import { useState } from "react";
import "./tailwind.css";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const LINK = "rounded px-5 py-2 text-white underline";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3 className="mb-4 text-2xl font-semibold">Query Parameters</h3>
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          className="w-72 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-query-parameter-a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          className="w-72 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-query-parameter-b"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          id="wd-query-parameter-add"
          className={`${LINK} rounded-md bg-blue-600`}
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className={`${LINK} rounded-md bg-red-600`}
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className={`${LINK} rounded-md bg-green-600`}
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className={`${LINK} rounded-md bg-amber-600`}
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
