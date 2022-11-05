// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div class="username"></div>
          <%= username %>
        <div><%= text %></div>
      </div>
    `)
};

// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"

// var template = _.template("<b><%- value %></b>");
// template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"

// var compiled = _.template("<% print('Hello ' + epithet); %>");
// compiled({epithet: "stooge"});
// => "Hello stooge"