var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#rooms button').click(FormView.handleRoom);
    // when username is clicked,some sort of function is invoked
    // $('#user').click(FormView.handleFriends);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    MessagesView.renderMessage();
    App.send();
    // console.log('click!');
  },

  handleRoom: function() {
    RoomsView.renderRoom();
  },

  handleFriends: function() {
    // console.log('Friend was handled');
    // var text;
    // document.addEventListener('click', function (event) {
    //   text = event.target.innerText;
    // });
    // var test = document.getElementById('user').innerText;
    // console.log(text);
    var clickedUser = $('.user').click(function (event) {
      console.log($(event).val().prop('id'));
      // var test = $(event.target).children();

    });
    Friends.username.push(clickedUser);
    console.log(Friends.username);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};