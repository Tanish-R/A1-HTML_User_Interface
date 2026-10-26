export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let myNum = 64;
  let myString = "Web Development is cool";
  let typeMyNum = typeof myNum;
  let typeMyString = typeof myString;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let typeSampleCount = typeof sampleCount;
  let typeSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      sampleCount = {sampleCount}
      <br />
      typeSampleCount = {typeSampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      typeSampleLabel = {typeSampleLabel}
      <br />
      <br />
      myNum = {myNum}
      <br />
      typeMyNum = {typeMyNum}
      <br />
      myString = {myString}
      <br />
      typeMyString = {typeMyString}
      <hr />
    </div>
  );
}