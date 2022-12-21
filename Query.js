19-12-22
db.client_master.find({},{Name:1}).pretty()
db.client_master.find({},{Name:1},{city:1}).pretty()
db.client_master.find({"city":"Bombay"}).pretty()
db.salesman_master.find({"salamt":{$eq:3000}}).pretty()

20-12-22
db.client_master.update({"client_no":"C00001"},{$set:{"baldue":1000}})
db.client_master.update({"client_no":"C00005"},{$set:{"city":"Banglor"}})
db.product_master.update({"description":"1.22 Drive"},{$set:{"costprice":950}})
db.salesman_master.update({},{$set:{"city":"pune"}})

db.product_master.find({$and:[{"sellprice":{$lt:750}},{"sellprice":{$gt:500}}]}).pretty()

