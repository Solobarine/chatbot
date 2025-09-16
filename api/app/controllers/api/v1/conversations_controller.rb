class Api::V1::ConversationsController < ApplicationController
  def index
    @conversations = Conversation.all

    render json: {conversations: @conversations}
  end

  def create
    @conversation = Conversation.new

    if @conversation.save
      @bot_message = Message.create!({text: "How can I help you?", sender: "BOT", conversation_id: @conversation.id})

    render json: {conversation: @conversation}, status: :created
    else
      render json: {error: "Something went wrong"}, status: :unprocessable_content
    end
  end

  def show
    @conversation = Conversation.find(params[:id])

    if @conversation
      render json: {conversation: @conversation}, status: :ok
    else
      render json: {error: "Not Found"}, status: :not_found
    end
  end

  def destroy
    @conversation = Conversation.find(params[:id])

    if @conversation.destroy
      render json: {}, status: :no_content
    else
      render json: {error: "Something went wrong"}, status: :unprocessable_content
    end
  end
end
