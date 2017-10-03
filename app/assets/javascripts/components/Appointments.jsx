var Appointments = React.createClass({
  getInitialState: function() {
    return {
      appointments: this.props.appointments,
      title: '',
      appt_time: ''
    }
  },
  handleInput: function(obj) {
    this.setState(obj)
  },
  handleForm: function() {
    var appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time
    };

    $.post(
      "/appointments",
      {appointment: appointment}
    ).done(function(json) {
      this.addAppointment(json);
    }.bind(this));
  },
  addAppointment: function(json) {
    this.state.appointments.push(json);

    appointments = this.state.appointments.sort(function(a, b) {
      return new Date(a.appt_time) - new Date(b.appt_time)
    });

    this.setState({appointments: appointments});
  },
  render: function() {
    return (
      <div>
        <AppointmentForm 
        title={this.state.title} 
        appt_time={this.state.appt_time} 
        handleInput={this.handleInput} 
        handleForm={this.handleForm} />
        <AppointmentLists appointments={this.state.appointments} />
      </div>
    )
  }
});