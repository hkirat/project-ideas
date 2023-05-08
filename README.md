## Project ideas to target GSoC 2024

 ### Chess
  - Build a multiplayer chess game like https://chess.com
  - Frontend should allow users to signup, create accounts and create a room
  - On room creation, they can share the link with their friend who can join the group as well
  - Add move validation to make sure users can only make valid moves
  - Use either canvas or raw HTML blocks for the game. You may also use a game engnie like phaser.
  - You will need to do socket programming since this is a realtime game.
  
 ### 2 player flappy bird
  - Create a multiplayer flappy bird game where users can invite their friends and play against each other
  - Use raw canvas for rendering, and write all physics yourself (Basic physics like acc, velocity ...)
  - You will need to do socket programming since this is a realtime game. Sockets would relay the positions of users to each other.
  
 ### Create a UI on top of ChatGPT Api
  - Create a ChatGPT clone using their APIs
  - Use their APIs on the backend, relay the information to your frontend
  - Make sure your frontend experience is 10x better than the native chat GPT experience.
  - Allow users to put in their own Chat GPT API keys and use GPT 4.

 ### Create an multi chain airdropping website 
   - Build a website that lets users airdrop various crypto currencies to them on their respective testnets
   - User should be allowed to select the chain (ETH, SOL, Polygon, ARB) and put in an address where they want the native token sent
   - User should be able to select the amount they want to 
