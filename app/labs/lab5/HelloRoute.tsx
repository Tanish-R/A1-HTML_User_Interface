"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import "./tailwind.css";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <div id="wd-hello-route">
      <h3 className="mb-2 mt-4 text-2xl font-semibold">Hello Route</h3>
      <p>
        Response from server: <b id="wd-hello-message">{hello.message}</b>
      </p>
      <hr className="mt-4" />
    </div>
  );
}
