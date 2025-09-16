class Api::V1::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      @bot_message = Message.create({text: "This is an AI generated response", conversation_id: message_params[:conversation_id], sender: "BOT"})

      render json: {userMessage: @message, botReply: @bot_message}, status: :created
    else
      render json: { errors: @message.errors.full_messages }, status: :unprocessable_content
    end
  end

  def show
    @conversation = Conversation.find(params[:id])
    @messages = @conversation.messages

    render json: {messages: @messages}, status: :ok
  end

  private

  def message_params
    params.require(:message).permit(:text, :sender, :conversation_id)
  end
end
