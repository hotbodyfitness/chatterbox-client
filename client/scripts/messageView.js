var MessageView = {

  render: _.template(`
  <div class="username">
    <b><%= username %>:</b>
      <div class="text">
      <%= text %>
    </div>
  </div>
  <br>
    `)

};