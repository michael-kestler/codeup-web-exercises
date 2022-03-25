function lifeInWeeks(age) {

    var days = (90 * 365) - (age * 365);
    var weeks = (90 * 52) - (age * 52);
    var months = (90 * 12) - (age * 12);
    console.log("You have " + days + " days, " + weeks + " weeks, and "
        + months + " months left.");
}
lifeInWeeks(50);
