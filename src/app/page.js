import "./page.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div className="Header">
        <h2>Alex Curwood</h2>
        <h1>Aspiring Junior Software Developer</h1>
      </div>
      <div className="nav">
        <Link href="#about">About Me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#tech-stack">Tech Stack</Link>
      </div>
      <div id="about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus
          elit, tincidunt vel feugiat in, imperdiet condimentum enim. Morbi non
          mauris nunc. Vestibulum maximus quam sed nibh feugiat, ullamcorper
          venenatis risus semper. Phasellus porta ac arcu sit amet finibus.
          Donec ut tellus nec lorem ullamcorper ultricies. Pellentesque vitae
          mauris risus. Donec eget dictum felis. Pellentesque augue nibh,
          hendrerit sit amet elit et, blandit hendrerit diam. Proin molestie mi
          at rutrum fermentum. Donec sed porta elit. Praesent aliquam imperdiet
          ultricies.
        </p>
      </div>
      <div id="projects">
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
