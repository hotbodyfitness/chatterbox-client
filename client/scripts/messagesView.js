var MessagesView = {

  $chats: $('#chats'), // empty div

  initialize: function () {
    MessagesView.render();
  },

  render: function () {
    var messageArray = [];

    App.fetch(function (data) {
      // var username = '';
      messageArray = data.slice();
      // console.log((messageArray[0].username));
      for (let x = 0; x < messageArray.length; x++) {
        if (messageArray[x].hasOwnProperty('username')) {
          if (!messageArray[x].username.includes('<') && !messageArray[x].text.includes('<') && !messageArray[x].username.includes('%')) {
            $('#chats').append(MessageView.render(messageArray[x]));
          }
        }
      }
    });

  },

  renderMessage: function (input) {
    if (input) {
      $('#chats').prepend(MessageView.renderTest(input));
    } else {
      Messages.text = $('#message').val();
      $('#chats').prepend(MessageView.render(Messages));
    }
  }
  // .html(MessagesView.format)
};