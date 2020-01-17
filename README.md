# Train-Scheduler

## Deployed Page
[Link to Live Page](https://andrewja01.github.io/Train-Scheduler/)

## Description

The Train-Scheduler app takes a users input for a train name, destination, frequency, and time the first train starts to append this information to a table. The information that is inputted by the user is used to calculate the time the next train leaves based on the users current location and how many minutes until it leave based on the users current time. 

To start, I used firebase to be able to store the data that is inputted into the table. Using javascript/ jquery I was able to create a function that runs based on a click event listener. After the train information is input it will push this information to the firebase database. 

Once the information has been added I needed to use the moment.js library to calculate the current time in the hh:mm format and the difference in time from the current until the next train leaves. This factors in the frequency that was input as well as the time the first train leaves. After the it finishes the calculations, it dynamically appends the information to the table using jquery. 

## Author

##### Andrew Jasinski
