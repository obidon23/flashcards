// return masked string
function maskify(cc) {
    var exposedDigits = cc.slice(12);
    var maskedDigits = "############";
    
    console.log(maskedDigits + exposedDigits);
}

maskify("6011005372005069");