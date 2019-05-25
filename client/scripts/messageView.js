var MessageView = {

  render: _.template(`
  <div class="username" style="background:#DBDBDB;padding:10px">
    <b id="<%= username %>" class="user"><a onclick="FormView.handleFriends()" href="JavaScript:void(0)" style="text-transform:capitalize"><%= username %>:</a></b>
      <div class="text">
      <%= text %>
    </div>
  </div>
  <br>
    `),

  renderTest: _.template(`
    <div class="username" style="background:#DBDBDB;padding:10px">
      <b id="<%= username %>"><%= username %>:</b>
        <div class="text">
        <%= text %>
      </div>
    </div>
      `)

};