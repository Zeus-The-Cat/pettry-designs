export const Mock_Response_1 = {
    "admin": {
      "id": "a-1",
      "nickname": "Admin User",
      "admin": true,
      "avatar": "default",
      "color": "blue"
    },
    "users": [
      {
        "id": "u-1",
        "nickname": "User 1",
        "admin": false,
        "avatar": "default",
        "color": "red"
      },
      {
        "id": "u-2",
        "nickname": "User 2",
        "admin": false,
        "avatar": "default",
        "color": "green"
      }
    ],
    "roomName": "New Room A",
    "roomSetting": null,
    "baseLinkUrl": "https://www.google.com",
    "activeTicket": "Active Ticket A",
    "tickets": [
      {
        "id": "t-1",
        "title": "Ticket 1",
        "currentPoints": 1,
        "description": "Description for ticket 1"
      },
      {
        "id": "t-2",
        "title": "Ticket 2",
        "currentPoints": 1,
        "description": "Description for ticket 2"
      }
    ],
    "votes": [
      {
        "userId": "u-2",
        "ticketId": "t-1",
        "vote": 2
      }
    ],
    "history": [],
    "chat": [
      {
        "messageId": "24f83120-f8ff-4bff-bd61-23323fa148ff",
        "userId": "u-1",
        "message": "Hello",
        "reactions": []
      },
      {
        "messageId": "26f83120-f8ff-4bff-bd61-23323fa148ff",
        "userId": "u-2",
        "message": "World",
        "reactions": [{
            "userId": "u-1",
            "reaction": "like"
        }]
      }
    ]
  }