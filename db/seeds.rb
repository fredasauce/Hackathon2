@liked_video = [ true, false ]

5.times do
  name = Faker::Name.name
  email = Faker::Internet.email
  password = "password"
  avatar = Faker::Avatar.image(name, "300x300", "png", "set5"),
  user = User.create(name: name, email: email, password: password, password_confirmation: password, avatar: avatar)

  5.times do
    vid = Video.create(
      title: Faker::Cannabis.health_benefit,
      duration: "00:38",
      genre: Faker::Book.genre,
      description: Faker::FamousLastWords.last_words,
      trailer: Faker::LoremFlickr.image,
      liked: @liked_posts.sample,
      user_id: user.id
    )

      5.times do
        Comment.create(
          body: Faker::Lorem.paragraph_by_chars(256, false),
          video_id: vid.id 
        )

      end
      
end

puts "5 Users Created, each with 5 videos, each video with 5 comments."