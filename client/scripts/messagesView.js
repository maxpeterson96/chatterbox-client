// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // MessagesView.render();
    // set up event handles

  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // console.log('check this length', data);
    // console.log('length', data.length);
    for (let index = 0; index < data.length; index++) {
      console.log('for loop is called ', data[index]);
      MessagesView.renderMessage(data[index]);
    }
    //Messages._data.forEach(function(item) {
    // $message.text = Messages._data[x][0] + ': ' + Messages._data[x][1];
    // $chats.append($message);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render({username: message[0], text: message[1]});
    console.log('message: ', $message);
    // $message.text(message[0] + ': ' + message[1]);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};