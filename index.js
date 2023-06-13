const locationScuber =  42
let locationCustomer

//function for distance in blocks
function distanceFromHqInBlocks (locationScuber, locationCustomer) {
    if (locationCustomer > 42) {
        return locationCustomer - locationScuber
    } else if (locationCustomer < 42) {
        return locationScuber - locationCustomer
    }
}

//test for distance in blocks
locationCustomer = 47
console.log (distanceFromHqInBlocks(locationScuber, locationCustomer))

locationCustomer = 35
console.log (distanceFromHqInBlocks(locationScuber, locationCustomer))

//function for distance in feet
function distanceFromHqInFeet (locationScuber, locationCustomer) {
    if (locationCustomer > 42) {
        return (locationCustomer - locationScuber)*264
    } else if (locationCustomer < 42) {
        return (locationScuber - locationCustomer)*264
    }
}

//test for distance in feet
locationCustomer = 51
console.log(distanceFromHqInFeet(locationScuber, locationCustomer))

locationCustomer = 25
console.log(distanceFromHqInFeet(locationScuber, locationCustomer))

//function for distance travelled in feet
let start
let destination
function distanceTravelledInFeet (start, destination) {
    if (start>destination) {
        return (start - destination)*264
    } else if (destination>start) {
        return (destination - start)*264
    }
}

//test for distance travelled in feet
start = 56
destination = 21
console.log(distanceTravelledInFeet(start, destination))

start = 42
destination = 61
console.log(distanceTravelledInFeet(start, destination))

// function for calculating fare price
let distanceInFeet = distanceTravelledInFeet(start,destination)
function calculatesFarePrice (distanceInFeet) {
 if (distanceInFeet <= 400) {
    return `this one is on me.`
 } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return distanceInFeet*2 ` cents`
 } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return `price is 5000 cents`
 }
 else if (distanceInFeet > 2500) {
    return `cannot travel that far`
 }
}

// test for calculating fare price
distanceInFeet = 2042
console.log(calculatesFarePrice(distanceInFeet))





