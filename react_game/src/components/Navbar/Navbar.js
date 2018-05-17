import React from "react";
import "./Navbar.css"

// const Navbar = () => (
//   <nav class="navbar">
//     <ul>
//       <li class="logo">
//         Clicky Game
//       </li>
//       <li class="score">
//         Score:  {score}
//         | Top Score:  {topscore}
//       </li>
//     </ul>
//   </nav>
// );

const Navbar = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/clicky-game/">{props.title}</a>
      </li>
      <li id="score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;
