var fs = require('fs');

let jsonall = require('./raw-data.json')

// weapon-redtext.json
json = jsonall["枪械红字"]
newjson=[]
json.forEach(element => {
    tmp={
        "厂商": element.厂商.split('\r\n')[1],
        "brand":element.厂商.split('\r\n')[0],
        "枪种": element.枪种,
        "品质": element.品质,
        "名称": element.名称.split('\r\n')[0],
        "name": element.名称.split('\r\n')[1],
        "红字": element.红字.split('\r\n')[0],
        "redtext": element.红字.split('\r\n')[1]===undefined?element.红字.split('\r\n')[0]:element.红字.split('\r\n')[1],
        "效果": element.效果.replace(/\r\n/g, '<br>').replace(/　　/g, ''),
        "溅射判定": element.溅射判定,
        "掉落": element.掉落.replace(/\r\n/g, '<br>'),
    }
    ys = []
    if (element.元素1 !== undefined){
        ys.push("火")
    }
    if (element.元素2 !== undefined){
        ys.push("电")
    }
    if (element.元素3 !== undefined){
        ys.push("酸")
    }
    if (element.元素4 !== undefined){
        ys.push("冰")
    }
    if (element.元素5 !== undefined){
        ys.push("辐射")
    }
    tmp["元素"] = ys
    newjson.push(tmp)
});

j={}
j['data'] = newjson

fs.writeFile("weapon-redtext.json", JSON.stringify(j,"",4), function(err) {
    if (err) {
        console.log(err);
    }
});

// shield-redtext.json
json = jsonall["护盾红字"]
newjson=[]
json.forEach(element => {
    tmp={
        "厂商": element.厂商.split('\r\n')[0],
        "brand":element.厂商.split('\r\n')[1],
        "品质": element.品质,
        "名称": element.名称.split('\r\n')[0],
        "name": element.名称.split('\r\n')[1],
        "红字": element.红字.split('\r\n')[0],
        "redtext": element.红字.split('\r\n')[1]===undefined?element.红字.split('\r\n')[0]:element.红字.split('\r\n')[1],
        "效果": element.效果.replace(/\r\n/g, '<br>').replace(/　　/g, ''),
        "掉落": element.掉落.replace(/\r\n/g, '<br>'),
        "盾值加成": element.盾值加成,
        "延迟加成": element.延迟加成,
        "充能加成": element.充能加成,
    }
    ys = []
    if (element.元素1 !== undefined){
        ys.push("火")
    }
    if (element.元素2 !== undefined){
        ys.push("电")
    }
    if (element.元素3 !== undefined){
        ys.push("酸")
    }
    if (element.元素4 !== undefined){
        ys.push("冰")
    }
    if (element.元素5 !== undefined){
        ys.push("辐射")
    }
    tmp["元素"] = ys
    newjson.push(tmp)
});

j={}
j['data'] = newjson

fs.writeFile("shield-redtext.json", JSON.stringify(j,"",4), function(err) {
    if (err) {
        console.log(err);
    }
});

// shield-redtext.json
json = jsonall["手雷红字"]
newjson=[]
json.forEach(element => {
    tmp={
        "brand": element.厂商.split('\r\n'),
        "品质": element.品质,
        "名称": element.名称.split('\r\n')[0],
        "name": element.名称.split('\r\n')[1],
        "红字": element.红字.split('\r\n')[0],
        "redtext": element.红字.split('\r\n')[1]===undefined?element.红字.split('\r\n')[0]:element.红字.split('\r\n')[1],
        "效果": element.效果.replace(/\r\n/g, '<br>').replace(/　　/g, ''),
        "掉落": element.掉落.replace(/\r\n/g, '<br>'),
        "伤害加成": element.伤害加成,
        "半径加成": element.半径加成,
    }
    ys = []
    if (element.元素1 !== undefined){
        ys.push("火")
    }
    if (element.元素2 !== undefined){
        ys.push("电")
    }
    if (element.元素3 !== undefined){
        ys.push("酸")
    }
    if (element.元素4 !== undefined){
        ys.push("冰")
    }
    if (element.元素5 !== undefined){
        ys.push("辐射")
    }
    tmp["元素"] = ys
    newjson.push(tmp)
});

j={}
j['data'] = newjson

fs.writeFile("grenade-redtext.json", JSON.stringify(j,"",4), function(err) {
    if (err) {
        console.log(err);
    }
});

// artifact-redtext.json
json = jsonall["神器红字"]
newjson=[]
json.forEach(element => {
    tmp={
        "品质": element.品质,
        "类型": element.类型,
        "名称": element.名称.split('\r\n')[0],
        "name": element.名称.split('\r\n')[1],
        "红字": element.红字.split('\r\n')[0],
        "redtext": element.红字.split('\r\n')[1]===undefined?element.红字.split('\r\n')[0]:element.红字.split('\r\n')[1],
        "效果": element.效果.replace(/\r\n/g, '<br>').replace(/　　/g, ''),
        "掉落": element.掉落.replace(/\r\n/g, '<br>'),
    }
    newjson.push(tmp)
});

j={}
j['data'] = newjson

fs.writeFile("artifact-redtext.json", JSON.stringify(j,"",4), function(err) {
    if (err) {
        console.log(err);
    }
});

// carrer-redtext.json
json = jsonall["传奇职业"]
newjson=[]
json.forEach(element => {
    tmp={
        "角色": element.角色.replace(/\r\n/g, ''),
        "名称": element.名称.split('\r\n')[0],
        "name": element.名称.split('\r\n')[1],
        "红字": element.红字.split('\r\n')[0],
        "redtext": element.红字.split('\r\n')[1]===undefined?element.红字.split('\r\n')[0]:element.红字.split('\r\n')[1],
        "效果": element.效果.replace(/\r\n/g, '<br>').replace(/　　/g, ''),
        "掉落": element.掉落.replace(/\r\n/g, '<br>'),
        "技能": element.技能.split("\r\n"),
    }
    newjson.push(tmp)
})
j={}
j['data'] = newjson

fs.writeFile("carrer-redtext.json", JSON.stringify(j,"",4), function(err) {
    if (err) {
        console.log(err);
    }
});