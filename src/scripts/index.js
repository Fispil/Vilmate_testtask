'use strict';

const blocks = document.getElementsByClassName('blocks');

const blockContainer = blocks[0];
blockContainer.style.display = 'flex';
blockContainer.style.alignItems = 'center';
blockContainer.style.flexWrap = 'wrap';
blockContainer.style.gap = '32px';

const numberOfBlocks = 100;
let numberOfPostionsToChange = numberOfBlocks - 1;

for (let i = 0; i < numberOfBlocks; i++) {
  const divElement = document.createElement("div");

  const text = `Block ${i + 1}`;

  divElement.classList = "block";
  divElement.textContent = text;

  divElement.style.backgroundColor = "#f7f7f7";
  divElement.style.height = "100px";
  divElement.style.border = "1px solid #ddd";
  divElement.style.borderRadius = "4px";
  divElement.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  divElement.style.padding = "15px";
  divElement.style.textAlign = "center";
  divElement.style.margin = "10px 0";
  divElement.style.display = 'flex';
  divElement.style.alignItems = "center";
  divElement.style.justifyContent = "center";
  divElement.style.order = numberOfBlocks;

  divElement.addEventListener("click", () => updatePosition(divElement));

  blockContainer.appendChild(divElement);
}

const updateDivStyles = (divElement) => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) {
    divElement.style.width = "100px";
  } else if (screenWidth >= 768) {
    divElement.style.width = "80px";
  } else {
    divElement.style.width = "50px";
  }
}

const updatePosition = (divElement) => {
  if (divElement.classList.contains("higher-order")) {
    divElement.classList.remove("higher-order");
    divElement.style.order = numberOfBlocks;
    numberOfPostionsToChange = numberOfPostionsToChange - 1;
  } else {
    divElement.classList.add("higher-order");
    numberOfPostionsToChange = numberOfPostionsToChange + 1;
    divElement.style.order = numberOfBlocks - numberOfPostionsToChange;
  }
}

window.addEventListener("resize", () => {
  resizeBlocks();
});

const resizeBlocks = () => {
  for (let j = 0; j < blocks.length; j++) {
    const blockContainer = blocks[j];
    const divElements = blockContainer.querySelectorAll(".block");

    for (let i = 0; i < divElements.length; i++) {
      updateDivStyles(divElements[i]);
    }
  }
}

resizeBlocks();