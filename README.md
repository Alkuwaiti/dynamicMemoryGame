# Memory Game

This is a number memory game created with vanilla JS, html and css. Goal is for a player to match the cards, gathering points to win over against the other player.

## Approach taken

Used a loop to add an event listener to the cards that are dynamically added based on the user input. Then a randomizer function is used which has two identical lists. using a loop it uses a random index for the first list, injects the result to the first card, and then pops that reut out of the list using the same random index. this continues until the list runs out of stuff. then another loop for the second list that has idenical contents to the first one, effectively doing the same but continuing the work that eeds to be done so that the rest of the cards are injected with results

## Taking care of bugs

Several bugs occured while implementing this project which are now fixed:
1. when a user clicks on a tile, and then clicks on that exact same tile, score is added
2. when there are two ALREADY clicked identical tiles that were flipped by one player, the other player could flip those exact two already flipped tiles and get points for them.
3. when a user clicks ctrl + a, numbers behind the tiles are revealed which would be essentialy cheating 

## How to play

1. Players choose an input number which indicates the number of pairs of cards on screen (Default is 10)
2. Red player goes first which is indicated by the bright red light on the left of the page.
3. Player flips two cards and if they match, +1 is added to their score.
4. If a player matches two cards, they get to keep playing, flipping two other cards.
5. If a player gets a score that is over half the number of input, they win.
6. If both players get half the score of the input, it is a tie.
7. Game automatically resets to input 10 after a game ends, players can choose to increase or decrease the number of cards.

