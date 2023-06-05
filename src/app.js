/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["amazing", "cool", "funny", "thrilling", "awesome"];
  let nouns = ["websites", "blogs", "hub", "spot", "webapp"];
  let tlds = [
    ".com",
    ".net",
    ".org",
    ".ca",
    ".bs",
    ".space",
    ".rock",
    ".dubai",
    ".et"
  ];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }
  document.body.innerHTML = `<ul>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ul>`;
};
