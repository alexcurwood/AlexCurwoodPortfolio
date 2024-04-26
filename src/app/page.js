"use client";

import "./page.css";
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "./ProgressBar/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <div className="Header">
        <h2>Alex Curwood</h2>
        <h1>Aspiring Junior Software Developer</h1>
      </div>
      <div className="nav">
        <Link
          href="#about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "lighter",
            border: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
            padding: "5px",
          }}
        >
          About Me
        </Link>
        <Link
          href="#projects"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "lighter",
            border: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
            padding: "5px",
          }}
        >
          Projects
        </Link>
        <Link
          href="#tech-stack"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "lighter",
            border: "solid",
            borderRadius: "10px",
            borderWidth: "1px",
            padding: "5px",
          }}
        >
          Tech Stack
        </Link>
      </div>

      <div id="about">
        <h2>About Me</h2>
        <hr></hr>
        <div id="about-text">
          <div>
            <p>
              I recently graduated from Durham University with a degree in
              Natural Sciences. My background and degree programme mainly
              consisted of Physics, Mathematics, and Philosophy, but in my
              Second Year at University, I had my first exposure to Computer
              Science and Software Development.
            </p>
            <p>
              Within these disciplines, I found a unique opportunity to
              capitalise on my natural curiosity, leverage my problem-solving
              and analytical skills, and work within a collaborative environment
              to create meaningful solutions for businesses and consumers.
            </p>
            <p>
              After graduating, I enrolled in the School of Code, which has been
              a fantastic opportunity to develop these skills further in an
              accelerated learning environment and start building solutions to
              real-world problems. Please find some examples below.
            </p>
          </div>
          <div className="links">
            <Link href="https://github.com/alexcurwood">
              <img src="/github-logo.png" className="logo" id="github"></img>
            </Link>
            <Link href="https://www.linkedin.com/in/alex-curwood-6453132b1/">
              <img src="/linkedin-logo.png" className="logo"></img>
            </Link>
            <a href="/SoCCVDraft2.pdf" download>
              <img
                src="/download-icon.jpeg"
                className="logo"
                id="download"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div id="projects">
        <h2>Projects</h2>
        <hr></hr>
        <p>
          Vivamus vitae finibus lorem, sit amet commodo mi. In non sapien nec
          metus hendrerit tempus non quis orci. Etiam posuere tempor felis nec
          lobortis. Etiam convallis tellus in neque vulputate, sed ornare magna
          vestibulum. Integer nec varius urna. Suspendisse non placerat nisi.
          Maecenas sem orci, faucibus at felis eget, hendrerit egestas nulla.
          Aenean eget augue ac urna mattis pellentesque luctus sit amet mi. Duis
          malesuada, ligula at dictum pellentesque, risus erat condimentum
          ipsum, et porttitor tortor lorem non lorem. Ut nunc leo, porta ac
          justo ac, semper tempor lorem. Morbi sagittis facilisis nulla
          ultricies mollis. Mauris faucibus, lectus in convallis convallis,
          tellus nibh mattis odio, a pellentesque sapien enim vitae neque.
        </p>
      </div>
      <div id="tech-stack">
        <h2>Tech Stack</h2>
        <hr></hr>
        <p>
          Mauris sodales in massa a hendrerit. Praesent lobortis ultricies odio,
          gravida tempor orci tincidunt non. Proin fermentum tempor sem. Integer
          elementum hendrerit mi non rutrum. Integer ut egestas ex. Maecenas
          consectetur justo nec nisl congue, vel maximus turpis faucibus. Duis
          consequat justo vel quam cursus bibendum. Aenean tincidunt mollis
          imperdiet. Cras a nunc leo. Suspendisse sed fringilla justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aenean eu odio dui. Aenean egestas dignissim
          tellus, eu molestie felis iaculis in. Integer finibus eget eros quis
          dignissim. Aliquam tempor massa dui, sed aliquam dolor bibendum eu.
          Nunc nec mauris non massa euismod commodo.
        </p>
      </div>
    </>
  );
}
