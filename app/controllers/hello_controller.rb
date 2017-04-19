class HelloController < ApplicationController
  def index
  end

  def country_select
    respond_to do |format|
      format.html do

      end
      format.json do
        case params["type"]
        when "countries" then render json: all_countries
        when "states"    then render json: all_states
        when "cities"    then render json: all_cities
        end
      end
    end
  end

  private

  def all_countries
    [
      {
        value: "ind",
        name: "India"
      },
      {
        value: "aus",
        name: "Austrelia"
      }
    ]
  end

  def all_states
    [
      {
        value: "mh",
        name: "Maharashtra"
      },
      {
        value: "mp",
        name: "Madhy Pradesh"
      }
    ]
  end


  def all_cities
    [
      {
        value: "pune",
        name: "Pune"
      },
      {
        value: "mum",
        name: "Mumbai"
      }
    ]
  end
end
