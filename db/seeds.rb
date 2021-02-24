User.destroy_all
Product.destroy_all
Cart.destroy_all
Favorite.destroy_all


user1 = User.create(username: "mrs161", password_digest: "abc123", name: "Madeline Rose Stalter", profile_picture: "https://cdn.mainichi.jp/vol1/2020/08/31/20200831p2g00m0fe122000p/8.jpg?1", phone_number: "315-663-7462", email: "MadelineRose16@outlook.com", address: "416 Candy Lane, New York, New York 12345", cc_number: "1234123412341234", cc_date: "10/40", cc_cvv: "123")

product1 = Product.create(name: "1967 SG Custom", description: "A recreation of the legend's guitar. RIP Hendrix!", price: "$9,000", image: "https://davesguitar.com/wp-content/uploads/2020/12/67140.jpg")
product2 = Product.create(name: "Marshall Amp", description: "Plays LOUD!", price: "$500", image: "https://media.sweetwater.com/api/i/q-82__ha-4583bf5cca270841__hmac-12bbe2755df0c969598e98e5e12ca70a928be9be/images/items/750/JVM210C-large.jpg")

cart1 = Cart.create(user_id: user1.id, product_id: product1.id)

favorite1 = Favorite.create(user_id: user1.id, product_id: product2.id)