var MessagesView = {

  $chats: $('#chats'), // empty div

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    var messageArray = [];

    App.fetch(function(data) {
      // var username = '';
      messageArray = data.slice();
      // console.log((messageArray[0].username));
      for (let x = 0; x < messageArray.length; x++) {
        if (messageArray[x].hasOwnProperty('username')) {
          $('#chats').prepend(MessagesView.format(messageArray[x]));

        }
      }
    });

  },
  // .html(MessagesView.format)

  format: _.template(`
  <div class="username">
    <b><%= username %>:</b>
    <div class="text">
    <%= text %>
    </div>
  </div>
  <br>
`)
};