# Proposal

## Description

I plan to expand upon my existing 2D array Pac-Man framework. While the prototype has 21x19 grid matrix, sprite sheet animation, direction queuing, and smooth lerp() movement, the Capstone version will transform the architecture into Object-Oriented Programming (OOP). It will introduce pathfinding algorithms (such as Dijkstra's Algorithm or A*) for ghost behaviors, multi phase states, external sound, and user control customization.

## Needs To Have List

- At least 2 Ghosts with complete phase logic and accurate pathfinding algorithms.
- Ghosts must give headstart to the player of about 3 seconds. During these 3 seconds, each ghost will target on of the four maze corners, moving around that corner untile the 3 second timer is over before switching to target Pac-Man. 
- Ghosts will have difficulty phases, shifting into angry or annoyed states after specific time thresholds if they fail to catch Pac-Man.
- At least 2-3 Power Pills on the map.
- Eating Power Pill triggers a Scared Phase, changing ghosts visuals to blue/white frightened sprites and reversing their algorithm to flee from Pac-Man.
- Refactoring of character and grid logic into scalable ES6 OOP classes.
- Functional Head-UP Display (HUD) showing current score, and lives remaining.
- Basic Start, Game Over, and Victory state screens.

## Nice To Have List

- Implement all 4 clasic Ghosts (Blinky, Pinky, Inky, Clyde), each with unique target algorithms.
- Interactive Intro/Home Page with animated menu graphics.
- Custom control settings menu allowing players to rebind keys (Default: Primary WASD, Secondary Arrow Keys).
- Eatable bonous items like Cherries sqawning dynamically for extra score points.
- Full audio integration for movement (waka-waka), pill eating, power mode siren, and death sound effects.
