## Pages
`https://www.pettrydesigns.com` - domain

`/` Pettry Designs landing page

    - Link About me
    - Link Portfolio Page 
        - Velocity Votes
        - Innago
        - Sherwin Smart Tool when made public

`/velocity-votes` - Lobby/Login

`/velocity-votes/[roomId]` -  Voting Room

See https://www.pettrydesigns/velocity-votes/abcde for an example of the functionality required for this page

## Description

`Velocity Votes` is a collaborative game where `Users` can join a `Room` to vote on `Tickets` that an `Admin` has created for the team. Votes are live and will show up on all Users computers at the same time. The  `Admin` will provide a list of `Tickets` that `Users` will score from a predefined list, usually, `[1, 3, 5, 8, 13]`. Additionally there is a chat room for Users to chat while playing. 

##  Requirements
- On the left is the `Room` a view to see other `User's` votes and place their own vote. It should include the active `Ticket` being voted upon
- Right hand side: two tabs that either show the `Ticket List` or the `Chat Room`. Additionally above the tabs there is a section for the users profile avatar and nickname. 
- `Ticket List` -  a list of Tickets with each ticket showing the following information: ticket name, average vote count, and number of votes placed. If the user is an `Admin` they should see an `edit icon` which lets them modify the ticket information.
- `Chat Room` - a basic chat room, can be similar to iOS or android messages. Each message should include the User's avatar next to their message, a timestamp of when the message was sent, the message content, an emoji icon for reacting to a message, and if the message belongs to the current `User` an `edit icon` so the user can update their message. 
- `Room` - Should have a visual section for each member of the room, their avatar, and their current vote. An indication of the active vote average as well as the active ticket. 

## Designer Notes
- Color theme is up to the designer, I would just request a `dark mode` color theme and a `light mode` color theme. You can use any website capability you can think of and any animation you'd like, I am confident that I can build anything you may come up with.
- Mobile view is up to the designer, just need all of the functional pieces present. 
