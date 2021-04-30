const kilometerToMeter = (num) => {
    var kilometer = num;
    var meter = kilometer * 1000;
    return meter;
}

console.log(kilometerToMeter(5));



const budgetCalculator = (w, m, l) => {
    var watch = 10;
    var mobile = 100;
    var laptop = 200;
    var watchResult = watch * w;
    var mobileResult = mobile * m;
    var laptopResult = laptop * l;
    var allBuyResult = watchResult + mobileResult + laptopResult;
    return allBuyResult;

}

console.log(budgetCalculator(1, 1, 1));


const hotelCost = (day) => {
    var regular = 100;
    var firstOffer = 80;
    var comboOffer = 50;
    if (day >= 1) {
        var cost = day * regular;
        return cost;
    }
    else if (day >= 10) {
        var cost2 = day * firstOffer;
        return cost2;
    }
    else if (day > 20) {
        var cost3 = day * comboOffer;
        return cost3
    }

    else if (day >= 0) {
        var const4 = "No result Available";
        return const4;
    }
}

console.log(hotelCost(0));

const megaFriend = (name) => {
    for (var i = 0; i <= name.length; i++) {
        var friendsName = name[i].length;
        console.log(friendsName);

    }
}

var name = ["Rifad", "Sakib", "Buniad", "Riyad", "Kamal", "Mohammad Imran"]

megaFriend(name);
