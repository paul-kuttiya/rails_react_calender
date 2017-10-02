var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name,
        obj = {};
    
    obj[name] = e.target.value;
    this.props.handleInput(obj);
  },
  render: function() {
    return (
      <div>
        <input type="text" name="title" placeholder="Appointment time" value={this.props.input} onChange={this.handleChange} />
        <input type="text" name="appt_time" placeholder="Date and time" value={this.props.appt_time} onChange={this.handleChange} />
        <input type="submit" value="Make Appointment" />
      </div>
    )
  }
});