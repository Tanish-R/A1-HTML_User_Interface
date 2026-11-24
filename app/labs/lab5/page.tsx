import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <a id="wd-welcome-link" href={`${HTTP_SERVER}/lab5/welcome`}>
        <br /> Welcome
      </a>
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsync />
      <WorkingWithRemoteArraysAsync />
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}
