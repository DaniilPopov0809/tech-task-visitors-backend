const fs = require("fs/promises");
const path = require("path");
const visitorsPath = path.join(__dirname, "../", "../", "db", "visitors.json");
const readAll = require("./readAll");

const update = async (visitorId, data) => {
    const visitors = await readAll();
    const index = visitors.findIndex((el) => el.id === visitorId);
if(index === -1){
    return null;
}
visitors[index] = {...visitors[index], ...data};
await fs.writeFile(visitorsPath, JSON.stringify(visitors, null, 2));
return visitors[index];
};

module.exports = update;