//   @todo

"use strict";

class main {
     constructor() {
          main.prepApp();
          main.handleBlueClick();
          main.handleRedClick();
     }

     static prepApp() {
          document.getElementById('blueButton').style.display = 'block';
          document.getElementById('redButton').style.display = 'none';
     }

     static handleBlueClick() {
          document.getElementById('blueButton').addEventListener('click', () => {
               document.getElementById('blueButton').style.display = "none";
               document.getElementById('redButton').style.display = 'block';
          });
     }

     static handleRedClick() {
          document.getElementById('redButton').addEventListener('click', () => {
              document.getElementById('redButton').style.display = "none";
              document.getElementById('blueButton').style.display = 'block';

          });
     }
}

window.addEventListener('load', () => {
     new main();
});