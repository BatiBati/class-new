const { addMonths, format, addDays } = require("date-fns");

const date = new Date();
console.log(format(addMonths (addDays(date, 2), "yyy-MM-dd HH:mm:ss")));
