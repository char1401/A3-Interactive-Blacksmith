// Assignment 1: Blacksmith — The Tiny Forge

// PLAN:
// 1. Get the HTML elements that I need to change.
// 2. Create variables to keep track of the heat and swords.
// 3. Check the heat to see what condition the forge is in.
// 4. Update the page when something changes.
// 5. Reset the forge back to its starting state.
// 6. Add heat to the forge.
// 7. Make a sword if there is enough heat.
// 8. Reset the forge when the page first loads.

// PLAN (Sword):
// To make a sword, first check if the forge has at least 30 heat.
// If there is not enough heat, tell the user the forge is too cold.
// If there is enough heat, use 30 heat and add one sword to the count.
// Then update the page to show the new heat and sword count.


// 1. Select the elements from the HTML
const forge = document.querySelector("#forge");
const heatValue = document.querySelector("#heat-value");
const swordCount = document.querySelector("#sword-count");
const forgeStatus = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const actionMessage = document.querySelector("#action-message");

// 1. Select the new elements for Assignment 3
const heatInput = document.querySelector("#heat-input");
const addHeatButton = document.querySelector("#add-heat-button");
const makeSwordButton = document.querySelector("#make-sword-button");
const resetForgeButton = document.querySelector("#reset-forge-button");

// 2. Create the variables for the forge state
let heat = 20;
let swords = 0;

// 3. Get the forge status based on the amount of heat
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

// 4. Update the page with the current forge information
function updateForge() {
  // Update the heat and sword numbers on the page
  heatValue.textContent = heat;
  swordCount.textContent = swords;

  // Remove the old forge status class
  forge.classList.remove("is-cold", "is-ready", "is-hot");

  // Check the heat and change the forge to the correct status
  if (heat < 30) {
    forge.classList.add("is-cold");
    forgeStatus.textContent = getForgeStatus(heat);
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";
  } else if (heat < 70) {
    forge.classList.add("is-ready");
    forgeStatus.textContent = getForgeStatus(heat);
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with glowing coals and a small flame";
  } else {
    forge.classList.add("is-hot");
    forgeStatus.textContent = getForgeStatus(heat);
    forgeImage.src = "assets/forge-hot.svg";
    forgeImage.alt = "A stone forge with bright flames and glowing coals";
  }
}

// 5. Reset the forge back to the starting values
function resetForge() {
  // Set the heat and swords back to their starting values
  heat = 20;
  swords = 0;

  // Change the message back to the starting message
  actionMessage.textContent = "Welcome to the forge. Add heat to begin.";

  // Update the page so it shows the reset values
  updateForge();
}

// 6. Add heat to the forge
function heatForge(amount) {
  // Check that the amount is a whole number between 0 and 100
  if (!Number.isInteger(amount) || amount < 0 || amount > 100) {
    actionMessage.textContent = "Please enter a whole number from 0 to 100.";
    return;
  }

  // Add the amount of heat
  heat = heat + amount;

  // Make sure the heat does not go over 100
  if (heat > 100) {
    heat = 100;
  }

  // Show a message about the heat that was added
  actionMessage.textContent = "You added " + amount + " heat to the forge.";

  // Update the page
  updateForge();
}

// 7. Make a sword if there is enough heat
function makeSword() {
  // The forge needs at least 30 heat to make a sword
  if (heat < 30) {
    actionMessage.textContent = "The forge is too cold to make a sword.";
  } else {
    // Use 30 heat to make the sword
    heat = heat - 30;

    // Add one sword to the sword count
    swords = swords + 1;

    // Show a message that the sword was made
    actionMessage.textContent = "You made a sword!";

    // Update the page
    updateForge();
  } 
}

// 8. Start the game by resetting the forge
resetForge();

// Begins Assignment 3
// 1. Add heat
addHeatButton.addEventListener("click", addHeat);

function addHeat() {
// Read the input and convert it into a number
const enteredValue = Number(heatInput.value);
// Check if the input is empty, invalid, or not a positive whole number
  if (
    heatInput.value.trim() === "" ||
    !Number.isFinite(enteredValue) ||
    !Number.isInteger(enteredValue) ||
    enteredValue <= 0
  ) {
    actionMessage.textContent =
      "Invalid input. Please enter a positive whole number, such as 10.";
    return;
  }
  // Pass the valid number to the heatForge function
  heatForge(enteredValue);
  // Clear the input after adding heat
  heatInput.value = "";
};

// 2. Make a sword
makeSwordButton.addEventListener("click", forgeSword);

function forgeSword() {
  // Call the existing makeSword function
  makeSword();
};

// 3. Reset the forge


// 4. Connect and update the interface
