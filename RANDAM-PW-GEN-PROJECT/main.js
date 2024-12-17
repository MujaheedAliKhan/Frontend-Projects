function OTP()
{
    let otp = 0;
    otp = math.floor(math.random() * 9000)
    return otp*100
}
console.log("Your OTP",OTP())