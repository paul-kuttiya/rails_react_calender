var Appointments = React.createClass({
  handleInput: function(obj) {
    this.setState(obj)
  },
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: '',
      appt_time: 'appointment time'
    }
  },
  render: function() {
    return (
      <div>
        <AppointmentForm 
        title={this.state.title} 
        appt_time={this.state.appt_time} 
        handleInput={this.handleInput} />
        <AppointmentLists appointments={this.state.appointments} />
      </div>
    )
  }
});