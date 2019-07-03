var money  = prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var st = prompt("Введите обязательную статью расходов в этом месяце", "");
var sum = prompt("Во сколько обойдется?", "");



var appData = {
    budget: money,
    timeData: time,
    expenses: {
        st:sum,
    },
    optionalExpenses: "",
    income: [],
    savings: false,

};

alert("Ваш бюджет на 1 день, равен " + appData.budget/30)