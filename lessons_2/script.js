let money, time;

function start(){
    money  = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == '' || money == null){
        money  = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();






var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

};

function chooseExpensec(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
    
        if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
        }else{
            i--;
        }
    }
}

chooseExpensec();



appData.MoneyPerDay = (appData.budget / 30).toFixed(2);

alert('Ежедневный бюджет: ' + appData.MoneyPerDay);

if (appData.MoneyPerDay < 100){
    console.log("Минимальный уровень достатка");
}else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
    console.log("Средний уровень достатка");
}else if (appData.MoneyPerDay > 2000){
    console.log("Высокий уровень достатка");
}else{
    console.log("Что-то не так")
}

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();