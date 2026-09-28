import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h4>Tanish Ravinuthala</h4>
      <ul>
        <li><a href="/labs">Home</a></li>
        <li><a href="/labs/lab1">Lab 1</a></li>
        <li><a href="/labs/lab2">Lab 2</a></li>
        <li><a href="/labs/lab3">Lab 3</a></li>
        <li><a href="/labs/lab4">Lab 4</a></li>
        <li><a href="/labs/lab5">Lab 5</a></li>
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