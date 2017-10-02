var AppointmentLists = React.createClass({
  renderList: function(app, i) {
    return (
     <Appointment key={app.id} appointment={app} />
    )
  },
  render: function() {
    return (
      <div>
        {this.props.appointments.map(this.renderList)}
      </div>
    )
  },
});