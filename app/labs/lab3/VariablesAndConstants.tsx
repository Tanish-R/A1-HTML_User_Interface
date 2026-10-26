export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;

  let myName = "Tanish";
  const myGreeting = `Hello, welcome to the world of JavaScript!`;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      sampleSum = {sampleSum}
      <br />
      <br />
      {myGreeting}
      <br />
      My name is {myName}
      <hr />
    </div>
  );
}