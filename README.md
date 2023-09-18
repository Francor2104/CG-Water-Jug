# ChicksGold-Water-Jug-Challenge

## Prerequisites 

Make sure you have the following prerequisites:
  * Node.js ( version 18.16.0 or above): [Download node.js](https://nodejs.org)
  * Git: [Download and install Git](https://git-scm.com/downloads)

## Installation
Follow these steps to install and run the project on your computer:

  1. Clone this repository to your local machine. You can do this by downloading the ZIP file or using GIt in your terminal: https://github.com/Francor2104/CG-Styles-Challenge.git
     
  2. Open a terminal and navigate to the project directory:
  ```
  cd Cg-Styles-Challenge
  ```
     
  3. Install the project dependencies by running the following command:
   ```
   npm install
   ```
     
  4. Once all dependencies are installed, you can start the development server with the following command: 
  ```
  npm run dev
  ```
  5. After running the command above, you'll see a message in the terminal indicating the address where the application is running. Typically, it will be [http://localhost:5173](http://localhost:5173)
  6. Follow the on-screen instructions to input the capacities of the jugs and the target amount of water you want to measure.
  7. The program will output the steps required to measure the target amount using the given jugs.

## Explanation
The Water Jug Challenge is a classic puzzle where you are given two jugs with different capacities and your goal is to measure a specific amount of water using only these jugs. This repository provides a solution to the Water Jug Challenge using a simple algorithm.
It uses a search algorithm to find the shortest sequence of steps to reach the desired measurement. The program tracks the state of the jugs and performs operations like filling, emptying, and transferring water between them. It ensures valid operations and outputs the sequence of steps and the final result.

The search algorithm that is used is called Breadth First Search (BFS). By exploring various combinations of actions, identifying the shortest sequence of steps, ensuring a systematic and efficient exploration of all possibilities.

## Available Commands

In the project, you can run the following commands:

  * npm run dev: Starts the development server.
  * npm run build: Creates an optimized and production-ready build of the project.
  * npm run serve: Serves the optimized build of the project locally.


