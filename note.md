## React on rails(with gem)
### Create react on rails calender project
* `rails _version_ new app_name`  
* specify `gem "react-rails"`  
* create react config in rails with command `rails g react:install`  
* create controller `rails g controller Appointments index`  


### Create react component  
* create `appointments.jsx` in components folder  
* create react `var Appointment` with `React.createClass` and instantiate `render` function    
~> `React.createClass` returns html UI bound with React DOM  

```javascript
var Appointments = React.createClass({
  render: function() {
    return (
      <h1>Calender React</h1>
    )
  }
});
``` 

* call react helper in view to stick `component` in the index view  

```haml
= react_component 'Appointments'
```

### create calender using vanilla rails function  
* generate appointment model  
~> `title string` and `appt_time:datetime`  
~> `rails g model Appointment title:string appt_time:datetime`  
~> `rake db:migrate`  

* create form and list under form  
```haml
= form_for @appointment do |f|
  = f.text_field :title
  = f.text_field :appt_time
  = f.submit 'Make Appointment'

- @appointments.each do |a|
  %h3= a.title
  %p= a.appt_time
```

* define `@appointments`, `@appointment` in index action  

* define `create` route and action  

* add rails ajax to the form `remote: true`  

* move `-@appointments.each` to own template  

* create `create.js` file to handle ajax request  
```haml
:plain
  $('#appointments').html("#{escape_javascript(render 'appointments')}");
```
~> add `@appointments` to `create` action for `_appointments` in `create.js`  

### Refactor calender with React