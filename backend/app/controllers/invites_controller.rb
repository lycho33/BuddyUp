class InvitesController < ApplicationController
    
    def index 
        invites = @current_user.sent_invite_ids
        render json: invites
    end

    def create 
        invite = Invites.new(invite_params)
        invite.join_request = null
        invite = Invite.new(invite_params)
        invite.join_request = null
        if invite.save
            render json: invite, status: :created
        end
    end

    private

    def invite_params
        params.require(:invite).permit(:join_request, :conversation_id, :sender_id, :recipient_id)
    end
end