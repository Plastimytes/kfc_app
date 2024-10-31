import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
    <p>Engineering mathematics is a branch of applied mathematics that applies mathematical theory, scientific computing, and practical engineering to solve real-world problems. It's an interdisciplinary subject that uses mathematical methods and techniques in engineering and industry. 
Some topics covered in engineering mathematics include:
Algebra
Trigonometry
2-D vectors
Basics of integration
Differential equations
Matrices and systems of equations
Complex numbers 
Specialized branches of engineering mathematics include engineering statistics and engineering optimization. 
Some resources for learning engineering mathematics include:
Engineering Mathematics - I - Course - Swayam - NPTEL: This course covers topics like differential calculus, integral calculus, linear algebra, and differential equations. 
Engineering Mathematics (Volume 1): This 1020-page book is published by Industrial Press, Inc. 
Quick and Dirty Introduction to Matlab: This YouTube video provides an overview of some basic Matlab commands. 
Mathematics for Engineering Students: This video reviews topics from algebra and calculus, including elementary functions, partial derivatives, and complex numbers. 
How Much Math is REALLY in Engineering? This video explores the amount of math involved in engineering. </p>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            new work for starting <code>app/page.js</code>.
          </li>
          <li>Lift six foot, seven foot, eight foot bunch
Daylight come and me wan' go home
Six foot, seven foot, eight foot bunch
Daylight come and me wan' go home
Day, me say day-o
Daylight come and me wan' go home
Day, me say day, me say day, me say day
Daylight come and me wan' go home
Come, mister tally man, tally me banana
Daylight come and me wan' go home
Come, mister tally man, tally me banana
Daylight come and me wan' go home
Day-o, day-o
Daylight come and me wan' go home
Day, me say day, me say day, me say day
Me say day, me say day-o
Daylight come and me wan' go home.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
