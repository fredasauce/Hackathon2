require 'test_helper'

class Api::ProfilesControllerTest < ActionDispatch::IntegrationTest
  test "should get name:string" do
    get api_profiles_name:string_url
    assert_response :success
  end

  test "should get image:string" do
    get api_profiles_image:string_url
    assert_response :success
  end

  test "should get user:belongs_to" do
    get api_profiles_user:belongs_to_url
    assert_response :success
  end

end
