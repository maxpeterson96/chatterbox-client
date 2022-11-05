// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// implement stack

var Messages = {

  // TODO: Define how you want to store your messages.

  _data: [],
  //_data: {};
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  getMessages: function(data) {

    // examine the response from the server request:
    console.log('input data', data);
    // scope where data exists
    for (let i = 0; i < data.length; i++) {
      // if data[i].text is not empty or null or if first element of string is '<'
      if (data[i].text !== '' && data[i].text !== null && data[i].text[0] !== '<') {
        // console.log([data[i].username, data[i].text]);
        Messages._data.push([data[i].username, data[i].text]);
        // console.log('curMessage', this._data[i]);
        //Messages._data
      }
    }
    MessagesView.render(Messages._data.slice());
    // TODO: Use the data to update Messages and Rooms
    // and re-render the corresponding views.

  },
};

// getMessages: function(data) {
//   Parse.readAll((data) => {
//     // examine the response from the server request:
//     console.log('input data', data);
//     // scope where data exists
//     for (let i = 0; i < data.length; i++) {
//       // if data[i].text is not empty or null or if first element of string is '<'
//       if (data[i].text !== '' && data[i].text !== null && data[i].text[0] !== '<') {
//         // console.log([data[i].username, data[i].text]);
//         Messages._data.push([data[i].username, data[i].text]);
//         // console.log('curMessage', this._data[i]);
//       }
//     }

//     // TODO: Use the data to update Messages and Rooms
//     // and re-render the corresponding views.
//   });