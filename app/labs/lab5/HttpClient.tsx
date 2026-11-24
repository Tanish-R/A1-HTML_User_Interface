"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
import "./tailwind.css";

const HEADING = "mb-4 mt-4 text-xl font-semibold";

export default function HttpClient() {
  const [welcomeOnClick, setWelcomeOnClick] = useState("");
  const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
  const [error, setError] = useState("");

  const fetchWelcomeOnClick = async () => {
    try {
      const message = await client.fetchWelcomeMessage();
      setWelcomeOnClick(message);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const fetchWelcomeOnLoad = async () => {
    try {
      const welcome = await client.fetchWelcomeMessage();
      setWelcomeOnLoad(welcome);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  useEffect(() => {
    fetchWelcomeOnLoad();
  }, []);

  return (
    <div id="wd-http-client">
      <h3 className="mb-2 mt-4 text-2xl font-semibold">HTTP Client</h3>

      <h4 className={HEADING}>Requesting on Click</h4>
      <button
        type="button"
        id="wd-fetch-welcome"
        className="rounded border border-blue-800 bg-blue-600 px-3 py-1.5 text-white"
        onClick={fetchWelcomeOnClick}
      >
        Fetch Welcome
      </button>
      <p className="mt-4">
        Response from server: <b>{welcomeOnClick}</b>
      </p>

      <h4 className={HEADING}>Requesting on Load</h4>
      <p>
        Response from server: <b>{welcomeOnLoad}</b>
      </p>

      {error && <p className="mt-4 text-red-600">{error}</p>}
      <hr className="mt-4" />
    </div>
  );
}
