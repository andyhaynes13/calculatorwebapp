require "sinatra"
enable :sessions

get '/' do
	redirect '/get_ops'
end

get '/get_ops' do
	erb :letsdomath
end

post '/post_ops' do
  operand1 = params[:operand1]
  operand2 = params[:operand2]
  operator = params[:operator]
  redirect '/get_result?operand1=' + operand1 + '&operand2=' + operand2 + '&operator=' + operator
end