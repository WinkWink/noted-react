import React from "react";
import "../components/pianoNav.css";

export default function PianoNav() {
  const keys = [
    { label: "Home", color: "white" },
    { label: "Browse", color: "white", black: { label: "Genres" } },
    { label: "Rate", color: "white", black: { label: "Albums" } },
    { label: "Profile", color: "white" },
  ];

//   test

  //add global breakpoints
  //add global grid 
  //add hover 

  //add global fonts
  //add navigation links
  // accessibility
  // create account form
  //login form 
  //dashboard

  return (
    <div className="piano-wrapper">
      <div className="piano">
        <div class="white-keys">
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
        </div>
        <div class="black-keys">
          <div class="black-key"></div>
          <div class="black-key"></div>
        </div>
      </div>
      <div className="piano">
        <div class="white-keys">
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
        </div>
        <div class="black-keys">
          <div class="black-key"></div>
          <div class="black-key"></div>
          <div class="black-key"></div>
        </div>
      </div>
      <div className="piano">
        <div class="white-keys">
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
        </div>
        <div class="black-keys">
          <div class="black-key"></div>
          <div class="black-key"></div>
        </div>
      </div>
      <div className="piano">
        <div class="white-keys">
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
          <div class="white-key"></div>
        </div>
        <div class="black-keys">
          <div class="black-key"></div>
          <div class="black-key"></div>
          <div class="black-key"></div>
        </div>
      </div>
    </div>
  );
}
