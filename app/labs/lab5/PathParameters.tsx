"use client";

import { useState } from "react";
import "./tailwind.css";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

const LINK = "rounded px-5 py-2 text-white underline";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3 className="mb-4 text-2xl font-semibold">Path Parameters</h3>
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          className="w-72 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-path-parameter-a"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          className="w-72 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-path-parameter-b"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          id="wd-path-parameter-add"
          className={`${LINK} rounded-md bg-blue-600`}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className={`${LINK} rounded-md bg-red-600`}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-path-parameter-multiply"
          className={`${LINK} rounded-md bg-green-600`}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className={`${LINK} rounded-md bg-amber-600`}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr className="mt-4" />
    </div>
  );
}
