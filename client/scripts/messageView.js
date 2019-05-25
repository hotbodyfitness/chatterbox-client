var MessageView = {

  render: _.template(`
  <div class="username" style="background:#DBDBDB;padding:10px">
    <b><%= username %>:</b>
      <div class="text">
      <%= text %>
    </div>
  </div>
  <br>
    `),

    renderTest: _.template(`
    <div class="username" style="background:#DBDBDB;padding:10px">
      <b><%= username %>:</b>
        <div class="text">
        <%= text %>
      </div>
    </div>
      `)

};