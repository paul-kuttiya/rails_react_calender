var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name,
        obj = {};
    
    obj[name] = e.target.value;
    this.props.handleInput(obj);
  },
  handleDateTime: function(e) {
    var obj = {};

    obj['appt_time'] = e.toDate();
    this.props.handleInput(obj);   
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.props.handleForm();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Appointment time" value={this.props.input} onChange={this.handleChange} />
        <Datetime input={false} onChange={this.handleDateTime} />
        <input type="submit" value="Make Appointment" />
      </form>
    )
  }
});