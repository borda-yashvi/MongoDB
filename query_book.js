// Q1) Select all documents from books collection, where no_of_reviews  is 3.
db.book.find({no_of_reviews:{$eq:3}}).pretty()

// Q2) Select all documents from the books collection where author profile contains 2 courses?
db.book.find({"author.profile.courses":{$eq:2}}).pretty()

// Q3) Read all documents from the books collection where 'tags' array contains 'database' element?
db.book.find({tags:"database"}).pretty()

// Q4) Select all documents from books collection where tags array is exactly equal to ["language","freeware","programming"].
db.book.find({tags:["language","freeware","programming"]}).pretty()

// Q5) To select all documents from books collection where no_of_reviews is not equal to 3.
db.book.find({no_of_reviews:{$ne:3}}).pretty()

// Q6) Select all documents from books collection where the no_of_reviews is greater than 3.
db.book.find({no_of_reviews:{$gt:3}}).pretty()

// Q7) Select all documents from books collection where the no_of_reviews is greater than or equal to 3.
db.book.find({no_of_reviews:{$gte:3}}).pretty()

// Q8) Select all documents from books collection where the no_of_reviews is less than 3.
db.book.find({no_of_reviews:{$lt:3}}).pretty()

// Q9) Select all documents from the books collection where the no_of_reviews is 1 or 4 or 5?
db.book.find({$or:[{"no_of_reviews":{$eq:1}},{"no_of_reviews":{$eq:4}},{"no_of_reviews":{$eq:5}}]}).pretty()

// Q10) Select all documents where either no_of_reviews >3 or tags array contains programming element?
db.book.find({$or:[{"no_of_reviews":{$gt:3}},{"tags.array":"programing"}]}).pretty()

// Q11) Select all documents where either no_of_reviews is less than 3 or downloadable is true or author profile contains atleast 2 books?
db.book.find({$or:[{"no_of_reviews":{$lt:3}},{"downloadable":"true"},{"author.array.book:":{$lte:2}}]}).pretty()

// Q12) Select all documents does not conain no_of_reviews and downloadable fields Note: $or results + $nor results = total no of documents


// Q13) Select all documents where the no_of_reviews is greater than or equals to 3 and downloadable is true?
db.book.find({$or:[{"no_of_reviews":{$gte:3}},{"downloadable":"true"}]}).pretty()

// Q14) update no_of_reviews to 10 where isbn no is 6677
db.book.update({"isbn":6677},{$set:{"no_of_reviews":10}})

// Q15) update profile to 8 of book oracle in simple way
db.book.update({"title":"Oracle in simple way"},{$set:{"author.profile.books":8}})


