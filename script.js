// script.js - To-Do List Application

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all elements we need
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Function to add a task
    function addTask() {
        // Get text from input and remove extra spaces
        const taskText = taskInput.value.trim();
        
        // Check if not empty
        if (taskText !== "") {
            // Create the task item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            
            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Make remove button work
            removeButton.onclick = function() {
                taskList.removeChild(listItem);
            };
            
            // Add button to task
            listItem.appendChild(removeButton);
            
            // Add task to list
            taskList.appendChild(listItem);
            
            // Clear the input box
            taskInput.value = "";
        } else {
            // Show message if empty
            alert("Please enter a task");
        }
    }
    
    // Make Add button work
    addButton.addEventListener('click', addTask);
    
    // Make Enter key work
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});