class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
    @appointment = Appointment.new
  end

  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment
    end
  end

  private
  def appointment_params
    params.require(:appointment).permit!
  end
end
