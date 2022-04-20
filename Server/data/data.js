const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "Nayim Hasan",
          email: "naim@gmail.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "Nayim Hasan",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Guest User",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Xobayer",
          email: "xobayer@yahoo.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Xobayer",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Nayim Hasan",
          email: "naim@gmail.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Sazzad Atik",
          email: "sazzad@gmail.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Sazzad Atik",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "Nayim Hasan",
          email: "naim@gmail.com",
        },
        {
          name: "Hridoy",
          email: "hridoy@gmail.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Social Work",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
];
  
module.exports = {chats}