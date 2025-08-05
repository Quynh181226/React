const greetingWithWeather=(name, weather)=>{
    if(weather==="sunny") console.log(`Chao ${name} hom nay troi nang`)
    else if(weather==="rainy") console.log(`Chao ${name} hom nay troi mua`)
    else if(weather==="cloudy") console.log(`Chao ${name} hom nay troi gio`)
    else console.log(`Chao ${name} hom nay thoi tiet ko xdinh`)
}
console.log(greetingWithWeather('Thuận', 'sunny'))
console.log(greetingWithWeather('Thuận', 'rainy'))
console.log(greetingWithWeather('Thuận', 'cloudy'))
console.log(greetingWithWeather('Thuận', 'nanis'))