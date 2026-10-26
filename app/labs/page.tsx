import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Tanish Ravinuthala</h2>
      <a id="wd-github" href="https://github.com/Tanish-R/A1-HTML_User_Interface " target="_blank" rel="noopener noreferrer">
        https://github.com/Tanish-R/A1-HTML_User_Interface
      </a>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4: Client State</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
      </ul>
    </div>
  );
}