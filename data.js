db.createCollection("client_master")
db.client_master.insertMany(
    [
        {
            client_no:'C00001',
            Name:'Isha',
            city:'Bombay',
            pincode:400054,
            state:'Maharashtra',
            baldue:15000,
        },
        {
            client_no:'C00002',
            Name:'Vrunda',
            city:'madras',
            pincode:780001,
            state:'Maharashtra',
            baldue:0,
        },
        {
            client_no:'C00003',
            Name:'Ivan',
            city:'Bombay',
            pincode:400054,
            state:'Maharashtra',
            baldue:15000,
        },
        {
            client_no:'C00003',
            Name:'Vandana',
            city:'Madras',
            pincode:780001,
            state:'Tamilnadu',
            baldue:0,
        },
        {
            client_no:'C00004',
            Name:'pramanda',
            city:'Bombay',
            pincode:400057,
            state:'Maharashtra',
            baldue:5000,
        },
        {
            client_no:'C00005',
            Name:'Basu',
            city:'Bombay',
            pincode:400056,
            state:'Maharashtra',
            baldue:0,
        },
        {
            client_no:'C00006',
            Name:'Ravi',
            city:'Delhi',
            pincode:100001,
            state:'Maharashtra',
            baldue:2000,
        },
        {
            client_no:'C00007',
            Name:'Rukmini',
            city:'Bombay',
            pincode:400050,
            state:'Maharashtra',
            baldue:0,
        },
    ]);

// db.createCollection("product_master")
// db.product_master.insertMany(
//     [
//         {
//             productno:'P00001',
//             description:'1.44floppies',
//             prfitpercent:5,
//             unitmeasured:'piece',
//             qtyonhand:100,
//             recorderlvl:20,
//             sellprice:525,
//             costprice:500,
//         },
//         {
//             productno:'P03453',
//             description:'Monitors',
//             prfitpercent:6,
//             unitmeasured:'piece',
//             qtyonhand:10,
//             recorderlvl:3,
//             sellprice:12000,
//             costprice:11200,
//         },
//         {
//             productno:'P06734',
//             description:'Mouse',
//             prfitpercent:5,
//             unitmeasured:'piece',
//             qtyonhand:20,
//             recorderlvl:5,
//             sellprice:1050,
//             costprice:500,
//         },
//         {
//             productno:'P07865',
//             description:'1.22 floppies',
//             prfitpercent:5,
//             unitmeasured:'piece',
//             qtyonhand:100,
//             recorderlvl:20,
//             sellprice:525,
//             costprice:500,
//         },
//         {
//             productno:'P07868',
//             description:'Keyboards',
//             prfitpercent:2,
//             unitmeasured:'piece',
//             qtyonhand:10,
//             recorderlvl:3,
//             sellprice:3150,
//             costprice:3050,
//         },
//         {
//             productno:'P07885',
//             description:'CD Drive',
//             prfitpercent:2.50,
//             unitmeasured:'piece',
//             qtyonhand:10,
//             recorderlvl:3,
//             sellprice:5250,
//             costprice:5100,
//         },
//         {
//             productno:'P07965',
//             description:'540 HDD',
//             prfitpercent:4,
//             unitmeasured:'piece',
//             qtyonhand:10,
//             recorderlvl:3,
//             sellprice:8400,
//             costprice:8000,
//         },
//         {
//             productno:'P07975',
//             description:'1.44 Drive',
//             prfitpercent:5,
//             unitmeasured:'piece',
//             qtyonhand:10,
//             recorderlvl:3,
//             sellprice:1050,
//             costprice:1000,
//         },
//         {
//             productno:'P08865',
//             description:'1.22 Drive',
//             prfitpercent:5,
//             unitmeasured:'piece',
//             qtyonhand:2,
//             recorderlvl:3,
//             sellprice:1050,
//             costprice:1000,
//         },
//     ]
// );

// db.createCollection("salesman_master")
// db.salesman_master.insertMany(
//     [
//     {
//         salesman_no:'S00001', 
//         salesmanname:'Kiran',
//         address:'A/14 worli',
//         city:'Bombay',
//         pincode:400002,
//         state:'Mah',
//         salamt:3000,
//         tgttogr:100,
//         ytdsale:50,
//         remark:'Good',
//     },
//     {
//         salesman_no:'S00002', 
//         salesmanname:'Manish',
//         address:'64,nariman',
//         city:'patana',
//         pincode:400001,
//         state:'Mah',
//         salamt:3000,
//         tgttogr:200,
//         ytdsale:100,
//         remark:'Good',
//     },
//     {
//         salesman_no:'S00003', 
//         salesmanname:'Ravi',
//         address:'P-7 Bandra',
//         city:'Bombay',
//         pincode:400032,
//         state:'Mah',
//         salamt:3000,
//         tgttogr:200,
//         ytdsale:100,
//         remark:'Good',
//     },
//     {
//         salesman_no:'S00004', 
//         salesmanname:'Ashish',
//         address:'A/5 Juhu',
//         city:'Bombay',
//         pincode:400044,
//         state:'Mah',
//         salamt:3500,
//         tgttogr:200,
//         ytdsale:150,
//         remark:'Good',
//     },
// ]);

// db.client_master.find()
// // db.client_master.find({}).sort({"Name"})
// db.client_master.find({}).sort({"Name":1}) //ascading
// db.client_master.find({}).sort({"Name":-1})  //descading
// db.client_master.find({"baldue":{$eq:0}})
// db.client_master.find({"baldue":{$gq:0}})
// db.client_master.find({"baldue":{$in:[2000,5000]}})
// db.client_master.find({$and:[{"baldue":{$ne:0}},{"state":{$in:["Maharashtra"]}}]})

// db.client_master.remove({})
// db.product_master.remove({qtyonhand:{$eq:10}})
// db.client_master.update({"Name":"Ivan"},{$set:{"Name":"Bayros"}})
// db.product_master.updateMany({},{$set:{txt:"18"}})

// show collections


