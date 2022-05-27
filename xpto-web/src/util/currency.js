export function getMoney(str) {
    return parseInt(str.replace(/[\D]+/g, ''));
}

export function formatReal(int) {
    var newInt = getMoney(int.replace('R$', ''))
    var tmp = newInt + '';
    var neg = false;
    
    if (int.indexOf("-") === 0) {
        neg = true;
        tmp = tmp.replace("-", "");
    }

    if (tmp.length === 1) tmp = "0" + tmp

    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
    if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    if (tmp.length > 9)
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2,$3");

    if (tmp.length > 12)
        tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, ".$1.$2.$3,$4");

    if (tmp.indexOf(".") === 0) tmp = tmp.replace(".", "");
    if (tmp.indexOf(",") === 0) tmp = tmp.replace(",", "0,");
    

    return `${(neg ? '-' + tmp : tmp)}`;
}

export function displayValue(int) {
    var money = int.toString()
    
    if(money.indexOf(".") === -1 && money.indexOf(",") === -1){
        money = money + ',00'
    }

    if(money.indexOf(".") === money.length -2){
        money = money + '0'
    }

    money = formatReal(money)

    return money;
}