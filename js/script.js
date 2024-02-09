const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {};

// Part 1: Assign values to object properties
learning.topic = "JS";
learning.learningGoals = ["Learn HTML", "Become Thorough At CSS", "Become a Beast at JavaScript", "Become a Master at React"];
learning.category = "Front End Development";
learning.topicImportance = "High";

// console.log(learning);

// Part 2: Change and Remove Values

//Reassign the topic property to a value of "JavaScript"
learning.topic = "JavaScript";

// Remove the second element from the learningGoals array
learning.learningGoals.splice(1, 1);

// console.log(learning);

// Part 3: Display Text & Remove a Class

// Use the innerText property to set the value the topicElement to the topic value "I'm Learning JavaScript"
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;

// Remove the "hide" class from the topicElement
topicElement.classList.remove("hide");

// Use the innerText property to set the value the countElement to the topic value "I have 3 learning goals"
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

// Remove the "hide" class from the countElement
countElement.classList.remove("hide");

