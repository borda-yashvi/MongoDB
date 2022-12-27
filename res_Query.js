// 1. Write a MongoDB query to display all the documents in the collection restaurants.
 db.res.find().pretty()

// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
 db.res.find({},{restaurant_id:1,name:1,borough:1,cuisine:1}).pretty()

// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
db.res.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}).pretty()

// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
db.res.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1,_id:0}).pretty()

// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.res.find({},{borough:"Bronx"}).pretty()

// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.res.find({},{borough:"Bronx"}).limit(5).pretty()

// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.res.find({},{borough:"Bronx"}).limit(5).skip(5).pretty()

// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
db.res.find({"grades.score":{$gte:90}}).pretty()

// 9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
db.res.find({$and:[{"grades.score":{$gte:90}},{"grades.score":{$lte:100}}]}).pretty()
db.res.find({grades:{$elemMatch:{score:{$gte:90,$lte:100}}}}).pretty()

// 10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
db.res.find({"address.coord":{$lte:-95.754168}}).pretty()

// 11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
db.res.find({$and:[{cuisine:{$ne:"American"}},{"grades.score":{$gte:70}},{"address.coord":{$lte:-65.754168}}]}).pretty()


// 12. Write a MongoDB query to find the restaurants which do not prepare any 
// cuisine of 'American' and achieved a score more than 70 and located in the 
// longitude less than -65.754168.
// Note : Do this query without using $and operator
db.res.find({"cuisine" : {$ne : "American "},"grades.score" :{$gt: 70},"address.coord" : {$lt : -65.754168}}).pretty()

// 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and 
// achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed 
// according to the cuisine in descending order.
db.res.find({$and:[{cuisine:{$ne:"American"}},{"grades.grade":{$eq:"A"}},{borough:{$ne:"Brooklyn"}}]}).sort({"cuisine":-1}).pretty()

// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants 
// which contain 'Wil' as first three letters for its name.
db.res.find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()

// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 
// 'ces' as last three letters for its name.
db.res.find({name: /ces$/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()

// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg'
//  as three letters somewhere in its name.
db.res.find({name:/^Reg/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1}).pretty()

// 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
db.res.find({$and:[{"borough": "Bronx"},{$or : [{ "cuisine" : {$eq:"American "}},{ "cuisine" :{$eq:"Chinese"}}]}]} ).pretty()

// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the 
// borough Staten Island or Queens or Bronxor Brooklyn.
db.res.find({"borough":{$in :["StatenIsland","Queens","Bronx","Brooklyn"]}},
{"restaurant_id":1,"name":1,"borough":1,"cuisine":1}).pretty()

// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging
//  to the borough Staten Island or Queens or Bronxor Brooklyn.
db.res.find({"borough":{$nin :["StatenIsland","Queens","Bronx","Brooklyn"]}},
{"restaurant_id":1,"name":1,"borough":1,"cuisine":1}).pretty()


// 20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score
//  which is not more than 10.
db.res.find({"grades.score":{$not:{$gt:10}}},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1}).pretty()

// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish
//  except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.
db.res.find({$or:[{name: /^Wil/},{$and:[{"cuisine":{$ne :"American"}},{"cuisine":{$ne:"Chinees"}}]}]},
{"restaurant_id":1,"name":1,"borough":1,"cuisine":1}).pretty()

// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A"
//  and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
db.res.find({$and:[{"grades.grade":"A"},{"grades.date":ISODate("2014-08-11T00:00:00Z")},{"grades.score":{$eq:11}}]},{"restaurant_id":1,"name":1,"grades":1}).pretty()
db.res.find({grades:{$elemMatch:{grade:"A",date:ISODate("2014-08-11T00:00:00Z"),score:{$eq:11}}}},{"restaurant_id":1,"name":1,"grades":1}).pretty()

// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades
//  array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
db.res.find({grades:{$elemMatch:{grade:"A",date:ISODate("2014-08-11T00:00:00Z"),score:{$eq:11}}}},{"restaurant_id":1,"name":1,"grades":1}).pretty()

// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd 
// element of coord array contains a value which is more than 42 and upto 52..
db.res.find({"address.coord":{$gte:42,$lte:52}},{"restaurant_id":1,"name":1,"address.street":1,"address.coord":1}).pretty()

// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
db.res.find().sort({name:1}).pretty()

// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.
db.res.find().sort({name:-1}).pretty()
// check due
// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be 
// in descending order.
db.res.find().sort({name:-1,cuisine:1}).pretty()

// 28. Write a MongoDB query to know whether all the addresses contains the street or not.
db.res.find({"address.street":{$exists:true}}).pretty()

// 29. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is single.
// 29. એક MongoDB ક્વેરી લખો જે રેસ્ટોરાંના સંગ્રહમાં તમામ દસ્તાવેજો પસંદ કરશે જ્યાં કોર્ડ ફીલ્ડ વેલ્યુ ડબલ છે
db.res.find({"address.coord":{$type:1}}).pretty()

// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a 
// remainder after dividing the score by 7.
// 30. એક MongoDB ક્વેરી લખો જે રેસ્ટોરન્ટ આઈડી, નામ અને ગ્રેડ પસંદ કરશે જે તે રેસ્ટોરન્ટ માટે સ્કોરને 7 વડે વિભાજિત કર્યા પછી બાકી 0 આપે છે.
db.res.find({"grades.score":{$mod:[7,0]}},{"restaurant_id" : 1,"name":1,"grades":1}).pretty()