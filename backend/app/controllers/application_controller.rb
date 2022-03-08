class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  include ActionController::Cookies
  include SessionsHelper
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private

  def authorize
    current_user?
    render json: { errors: ["Not authorized!"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
