db.TEACHER.insertOne({"ID":10101,"Name":"Srinivasan","Dept_name":"Comp. Sci.","Salary":65000,"Teaches":[{"Course_id":"CS-101","Title":"Intro. to Computer Science","Department_name":"Comp. Sci.","Credits":4,"Prereq_id":"","Sec_id":1,"Semester":"Fall","Year":2009,"Teaches_Dept":{"Building":"Taylor","Budget":100000}},{"Course_id":"CS-315","Title":"Robotics","Department_name":"Comp. Sci.","Credits":3,"Prereq_id":"CS-101","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Taylor","Budget":100000}},{"Course_id":"CS-347","Title":"Database System Concepts","Department_name":"Comp. Sci.","Credits":3,"Prereq_id":"CS-101","Sec_id":1,"Semester":"Fall","Year":2009,"Teaches_Dept":{"Building":"Taylor","Budget":100000}}]})



db.TEACHER.insertOne({"ID":12121,"Name":"Wu","Dept_name":"Finance","Salary":90000,"Teaches":[{"Course_id":"FIN-201","Title":"Investment Banking","Department_name":"Finance","Credits":3,"Prereq_id":"","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Painter","Budget":120000}}]})


db.TEACHER.insertOne({"ID":15151,"Name":"Mozart","Dept_name":"Music","Salary":40000,"Teaches":[{"Course_id":"MU-199","Title":"Music Video Production","Department_name":"Music","Credits":3,"Prereq_id":"","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Packard","Budget":80000}}]})



db.TEACHER.insertOne({"ID":22222,"Name":"Einstein","Dept_name":"Physics","Salary":95000,"Teaches":[{"Course_id":"PHY-101","Title":"Physical Principles","Department_name":"Physics","Credits":4,"Prereq_id":"","Sec_id":1,"Semester":"Fall","Year":2009,"Teaches_Dept":{"Building":"Watson","Budget":70000}}]})



db.TEACHER.insertOne({"ID":32343,"Name":"El Said","Dept_name":"History","Salary":60000,"Teaches":[{"Course_id":"HIS-351","Title":"World History","Department_name":"History","Credits":3,"Prereq_id":"","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Painter","Budget":50000}}]})



db.TEACHER.insertOne({"ID":33456,"Name":"Gold","Dept_name":"Physics","Salary":87000,"Teaches":[{"Course_id":"","Title":"","Department_name":"","Credits":null,"Prereq_id":"","Sec_id":null,"Semester":"","Year":null,"Teaches_Dept":{"Building":"","Budget":null}}]})



db.TEACHER.insertOne({"ID":45565,"Name":"Katz","Dept_name":"Comp. Sci.","Salary":75000,"Teaches":[{"Course_id":"CS-101","Title":"Intro. to Computer Science","Department_name":"Comp. Sci.","Credits":4,"Prereq_id":"","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Taylor","Budget":100000}},{"Course_id":"CS-319","Title":"Image Processing","Department_name":"Comp. Sci.","Credits":3,"Prereq_id":"CS-101","Sec_id":1,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Taylor","Budget":100000}}]})



db.TEACHER.insertOne({"ID":58583,"Name":"Califieri","Dept_name":"History","Salary":62000,"Teaches":[{"Course_id":"","Title":"","Department_name":"","Credits":null,"Prereq_id":"","Sec_id":null,"Semester":"","Year":null,"Teaches_Dept":{"Building":"","Budget":null}}]})



db.TEACHER.insertOne({"ID":76543,"Name":"Singh","Dept_name":"Finance","Salary":80000,"Teaches":[{"Course_id":"","Title":"","Department_name":"","Credits":null,"Prereq_id":"","Sec_id":null,"Semester":"","Year":null,"Teaches_Dept":{"Building":"","Budget":null}}]})



db.TEACHER.insertOne({"ID":76766,"Name":"Crick","Dept_name":"Biology","Salary":72000,"Teaches":[{"Course_id":"BIO-101","Title":"Intro. to Biology","Department_name":"Biology","Credits":4,"Prereq_id":"","Sec_id":1,"Semester":"Summer","Year":2009,"Teaches_Dept":{"Building":"Watson","Budget":90000}},{"Course_id":"BIO-301","Title":"Genetics","Department_name":"Biology","Credits":4,"Prereq_id":"BIO-101","Sec_id":1,"Semester":"Summer","Year":2010,"Teaches_Dept":{"Building":"Watson","Budget":90000}}]})




db.TEACHER.insertOne({"ID":83821,"Name":"Brandt","Dept_name":"Comp. Sci.","Salary":92000,"Teaches":[{"Course_id":"CS-190","Title":"Game Design","Department_name":"Comp. Sci.","Credits":4,"Prereq_id":"CS-101","Sec_id":1,"Semester":"Spring","Year":2009,"Teaches_Dept":{"Building":"Taylor","Budget":100000}},{"Course_id":"CS-190","Title":"Game Design","Department_name":"Comp. Sci.","Credits":4,"Prereq_id":"CS-101","Sec_id":2,"Semester":"Spring","Year":2009,"Teaches_Dept":{"Building":"Taylor","Budget":100000}},{"Course_id":"CS-319","Title":"Image Processing","Department_name":"Comp. Sci.","Credits":3,"Prereq_id":"CS-101","Sec_id":2,"Semester":"Spring","Year":2010,"Teaches_Dept":{"Building":"Taylor","Budget":100000}}]})


db.TEACHER.insertOne({"ID":null,"Name":"","Dept_name":"","Salary":null,"Teaches":[{"Course_id":"BIO-399","Title":"Computational Biology","Department_name":"Biology","Credits":3,"Prereq_id":"BIO-101","Sec_id":null,"Semester":"","Year":null,"Teaches_Dept":{"Building":"Watson","Budget":90000}}]})



db.FACULTY_INFO4.updateMany({},[{"$set":{"Gross_Salary":{"$add":[{"$multiply":[{"$add":[1.05,0.2]},"$Salary"]}]},"Net_Salary":{"$subtract":["$Gross_Salary",{"$add":[{"$multiply":["$Salary",0.3]},"$Salary"]}]}}}])

db.FACULTY_INFO4.updateMany({},[{"$set":{"Gross_Salary":{"$add":[{"$multiply":[{"$add":[1.05,0.2]},"$Salary"]},"$Salary"]}}}])


db.FACULTY_INFO4.updateMany({},[{"$set":{"Net_Salary":{"$subtract":["$Gross_Salary",{"$multiply":["$Salary",0.3]}]}}}])


db.FACULTY_INFO.aggregate([{"$group":{"_id":"$Department","Total_Salary":{"$sum":"$Salary"}}},{"$match":{"Total_Salary":{"$ne":null},"Department":{"$in":["Comp. Sci.","Physics"]}}},{"$project":{"_id":0,"Department":"$_id","Total_Salary":1}}])

db.FACULTY_INFO.aggregate([{"$match":{"Department":{"$in":["Comp. Sci.","Physics"]}}},{"$group":{"_id":"$Department","Total_Salary":{"$sum":"$Salary"},"No_of_Instructors":{"$count":"$ID"}}},{"$match":{"Total_Salary":{"$ne":0}}},{"$project":{"_id":0,"Department":"$_id","Total_Salary":1,"No_of_Instructors":1}}])


db.FACULTY_INFO.aggregate([{"$match":{"Teaches.Department_name":{"$in":["Comp. Sci.","Biology"]}}},{"$unwind":"$Teaches"},{"$group":{"_id":"$Teaches.Department_name","Total_credits":{"$sum":"$Teaches.Credits"}}},{"$project":{"_id":0,"Teaches.Department_name":"$_id","Total_credits":1}}])


db.FACULTY_INFO.aggregate([{"$match":{"Department":{"$ne":""}}},{"$group":{"_id":"$Department","No_of_Instructors":{"$count":{}}}},{"$project":{"_id":0,"Department":"$_id","Total_Salary":1,"No_of_Instructors":1}}])


db.FACULTY_INFO.aggregate([{"$group":{"_id":"$Department","Total_Salary":{"$sum":"$Salary"}}},{"$match":{"Total_Salary":{"$ne":0,"$gt":50000}}},{"$project":{"_id":0,"Department":"$_id","Total_Salary":1}}])





db.FACULTY_INFO.aggregate([{"$project":{"Month_of_Joining":{"$let":{vars:{"months_in_String":[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},in:{"$arrayElementAt":["$$months_in_String","$month"]}}}}}])


db.FACULTY_INFO.aggregate([{"$match":{"Name":{"$ne":""}}},{ "$project": {"Name":1, "_id":0, "Month_of_Joining": { "$let": { vars: { "months_in_String": [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }, in: { "$arrayElemAt": ["$$months_in_String", {"$month":"$Date_of_Join"}] } } } } }])


db.FACULTY_INFO.aggregate([{"$match":{"Name":{"$ne":""}}},{"$project":{"Name":1,"_id":0,"Experience_in_months":{"$trunc":[{"$divide":[{"$subtract":[new Date(),"$Date_of_Join"]},{"$multiply":[1000,60,60,24,30]}]},0]},"Experience_in_years":{"$trunc":[{"$divide":[{"$subtract":[new Date(),"$Date_of_Join"]},{"$multiply":[1000,60,60,24,30,12]}]},0]}}}])









db.FACULTY_INFO.aggregate([{"$match":{"Name":{"$ne":""}}},{"$project":{"Name":1,"_id":0,"Day_of_week":{"$let":{"vars":{"Days":[,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"in":{"$arrayElemAt":["$$Days",{"$dayOfWeek":"$Date_of_Join"}]}}}}}])