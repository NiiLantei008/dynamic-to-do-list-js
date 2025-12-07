// script.js - To-Do List Application

// Wait for the HTML to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 1: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 2: Function to add a new task
    function addTask() {
        // Get the task text from input field
        const taskText = taskInput.value.trim();
        
        // Check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return; // Stop the function if input is empty
        }
        
        // Step 3: Create new list item (li)
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        
        // Step 4: Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        
        // Step 5: Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };
        
        // Step 6: Add remove button to list item
        listItem.appendChild(removeButton);
        
        // Step 7: Add list item to task list
        taskList.appendChild(listItem);
        
        // Step 8: Clear the input field
        taskInput.value = '';
    }
    
    // Step 9: Add event listener to Add Task button
    addButton.addEventListener('click', addTask);
    
    // Step 10: Add event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
