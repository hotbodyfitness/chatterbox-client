var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#rooms button').click(FormView.handleRoom);
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

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};