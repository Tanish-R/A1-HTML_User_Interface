export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <a 
        href="https://student.me.northeastern.edu"
        target="_blank"
        rel="noreferrer"
        id="wd-your-link">
        Northeastern Student Hub
      </a>
      <br />
      <a 
        href="https://github.com/Tanish-R"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github">
        My Personal GitHub
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        target="_blank"
        rel="noreferrer"
        id="wd-ai-link">
        MDN: table element
      </a>
    </>
  );
}