import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h4>Tanish Ravinuthala</h4>
      <ul>
        <li><a href="/labs" id="wd-toc-home-link">Home</a></li>
        <li><a href="/labs/lab1" id="wd-lab1-link">Lab 1</a></li>
        <li><a href="/labs/lab2" id="wd-lab2-link">Lab 2</a></li>
        <li><a href="/labs/lab3" id="wd-lab3-link">Lab 3</a></li>
        <li><a href="/labs/lab4" id="wd-lab4-link">Lab 4</a></li>
        <li><a href="/labs/lab5" id="wd-lab5-link">Lab 5</a></li>
        <li><Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link></li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
      </li>
      </ul>
      <h5>Life&apos;s Simple, you make choices and you don&apos;t look back</h5>

    </div>
  );
}