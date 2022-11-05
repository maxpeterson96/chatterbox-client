// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// implement stack

var Messages = {

  // TODO: Define how you want to store your messages.

  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  getMessages: function() {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('messages', data);
      // scope where data exists

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },
};