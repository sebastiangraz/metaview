import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Avatar } from "./components/Avatar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* NAV */}
      <div className="nav">
        <div className="row">
          <span>Metaview</span>
          <menu>
            <ul>
              <li> Features </li>
              <li> Customers </li>
              <li> Blog </li>
              <li> Careers </li>
            </ul>
          </menu>
          <menu>
            <ul>
              <li> Sign in </li>
              <li class="cta"> Book a demo </li>
            </ul>
          </menu>
        </div>
      </div>
      {/* HERO */}
      <div className="hero">
        <span className="fadeIn">
          <h1 className="linear-wipe">How ambitious companies interview</h1>
        </span>
        <button className="cta fadeIn">Get started</button>
        <div className="avatarWrapper">
          <Avatar videoSrc="./conf1.mp4" delay={0} />
          <Avatar videoSrc="./conf2.mp4" delay={6} />
          <Avatar videoSrc="./conf3.mp4" delay={12} />
        </div>
        <div
          className="videoFadeIn"
          style={{
            display: "block",
            zIndex: -1,
            width: "100%",
            mixBlendMode: "darken",
            isolation: "isolate",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
          <video
            className="video"
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            controls={false}
            width="1800"
            height="1800"
          >
            <source src="./ribbonanimation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
