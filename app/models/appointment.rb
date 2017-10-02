class Appointment < ActiveRecord::Base
  default_scope { order(appt_time: :asc) }
end