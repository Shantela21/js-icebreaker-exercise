 //Step 1: Create Your Quest Log
let questLog = [
    "Collect 10 Firefly Wings",  
    "Defeat the Goblin King",  
    "Find the Lost Sword of Oakhaven"
];
console.log("Initial request log:", questLog);

//Step 2: Check Your Quest Count
console.log("The hero has " + questLog.length + " quests.");


//🔹 Step 3: Access a Specific Quest
console.log("The first quest is:", questLog [0]);

//Step 4: A New Quest Arrives!
questLog.push("Deliver the Royal Scroll");
console.log("After adding a new quest:", questLog);

 //Step 5: The Hero Completes a Quest
let completedQuest = questLog.pop();
console.log("Completed quest:", completedQuest);
console.log("Updated quest log:", questLog);

// Step 6: An Urgent Quest!
questLog.unshift("Rescue the Blacksmith's cat");
console.log("After adding urgent quest:", questLog);

//Step 7: The Hero Delegates a Task
let delegetedQuest = questLog.shift();
console.log("Delegeted quest:", delegetedQuest);
console.log("Updated quest log:", questLog);

 //Step 8: Re-prioritizing Quests
questLog.splice(1, 1);
console.log("After removing 'Defeat the Goblin King':", questLog);

 //Step 9: The King's Replacement
questLog.splice(1,0, "Slay the Dragon of Mount Doom");
console.log("After adding 'Slay the Dragon of Mount Doom':", questLog);


//Step 10: Displaying the Log for the King
let questSummary = questLog.join(" | ");
console.log("Quest summary for the King:", questSummary);

