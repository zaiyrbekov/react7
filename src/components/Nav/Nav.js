import "./Nav.css";
function Nav() {
  const rightLinks = ["link3", "link4", "link5", ""];
  const leftLinks = ["link1", "link2"];

  const left = leftLinks.map((leftLink) => {
    return (
      <li>
        {leftLink}
      </li>
    );
  });
  const right = rightLinks.map((rightLink) => {
    return (
      <li>
        {rightLink}
      </li>
    );
  });

  return (
    <nav>
      <ul>
        <span className="left">{left}</span>
        <span className="right">{right}</span>
      </ul>
    </nav>
  );
}

export default Nav;
