@liked_posts = [ true, false ]

5.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  password = "password"
  user = User.create(name: name, email: email, password: password, password_confirmation: password)

  vid = Video.create(
    name: user.name,
    gender: Faker::Gender.type,
    birthday: Faker::Date.birthday(min_age = 18),
    avatar: Faker::Avatar.image(name, "300x300", "png", "set5"),
    user_id: user.id
  )

    5.times do
      Post.create(
        author: Faker::Name.name,
        body: Faker::Lorem.paragraph_by_chars(256, false),
        liked: @liked_posts.sample,
        account_id: acct.id 
      )

    end


end

puts "20 Users with an Account Created, each Acct with 5 posts"