# Proposal

## Description

I plan to create a full Pac-Man game with all 4 Ghosts and their algorithm. I have already created its framwork in 2D arrays that already has rendering through frames in an image and Blinky's[Red Ghost] algorithm and a fixedGrid that stores the initial grid data that has positions of Ghosts and Pac-man and pills.

## Needs To Have List

- At least 2 Ghosts with all the phases and perfect algorithm.
- Ghosts must give headstart to the player of about 3 seconds. In that 3 seconds they will choose 1 of the 4 corner and go there first and then check whether it is 3 seconds past or not. If 3 seconds is past they will then shift to the algorithm to target the player, however if the 3 seconds countdown is not yet completed they will move around the corner until the countdown. Countdown might be different at the end of the game depending on how much ghosts will take to reach the corner. Countdown is not yet fixed, it is just an estimation.
- Ghosts should have phases where they are angry and annoyed. At the start of the game they will be normal but after certain amount of time they will move to anygry or annoyed state if they can't get player.
- There should at least 2-3 power pills that if player eat, Ghosts will move to a scared phase where they run away from the player.

## Nice To Have List

- All the Ghost with their perfect algorithm.
- An intro or home page.
- A control settings that allow the player to change the key binds. At default primary would be WASD and secondary would be Arrows.
- Eatable cherry that gives more point.
