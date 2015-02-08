require 'sinatra'
require 'slim'

class App < Sinatra::Base
 get '/' do
  slim :index, :layout => :main_layout
 end
end
