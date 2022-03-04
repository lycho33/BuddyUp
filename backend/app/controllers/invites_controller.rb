class InvitesController < ApplicationController
    
    def index 
        invites = @current_user.invites.all
        render json: invites
    end

    def create 
        invite = @current_user.invites.new(invite_params)
        invite.join_request = null
        test test
    end

    private

    def invite_params
        params.require(:invite).permit(:join_request, :conversation_id, :sender_id, :recipient_id)
    end
end
