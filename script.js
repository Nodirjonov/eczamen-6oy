

let p1=document.getElementById('pi1');
let p2=document.getElementById('pi2');
let p3=document.getElementById('pi3');
let p4=document.getElementById('pi4');
let p5=document.getElementById('pi5');
let p6=document.getElementById('pi6');
let p7=document.getElementById('pi7');
let p8=document.getElementById('pi8');
let p9=document.getElementById('pi9');
let p10=document.getElementById('pi10');
let pa=document.getElementById('a');
let img=document.querySelector('img')
let im1=document.getElementById('im1')
let im2=document.getElementById('im2')
let im3=document.getElementById('im3')
let im4=document.getElementById('im4')
let im5=document.getElementById('im5')
let im6=document.getElementById('im6')
let im7=document.getElementById('im7')
let im8=document.getElementById('im8')
let im9=document.getElementById('im9')
let pu1=document.getElementById('pu1')
let pu2=document.getElementById('pu2')
let pu3=document.getElementById('pu3')
let pu4=document.getElementById('pu4')
let pu5=document.getElementById('pu5')
let pu6=document.getElementById('pu6')
let pu7=document.getElementById('pu7')
let pu8=document.getElementById('pu8')
let pu9=document.getElementById('pu9')
let pu10=document.getElementById('pu10')

let APIKey="5f1077f561d87b1be334b15838fc01b4";
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=tashkent&units=metric&appid=${APIKey}` 
  )
  
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
p1.innerHTML=`${parseInt(data.main.temp)}°C`
pu1.innerHTML=`${data.weather[0].main}`
switch(data.weather[0].main){
  case 'Clear':
      img.src="./sun.jpg"
      break;
  case 'Clouds':
      img.src="./shomol.jpg"
      break;

  case 'Rain':
      img.src="./yongir.jpg"
      break;

  case 'Snow':
      img.src="./qor.jpg"
      break;
  case 'Partly Cloudy':
    img.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=fergana&units=metric&appid=${APIKey}` 
  )
  
  .then((response2)=>{
    return response2.json();
  })
  .then((data2)=>{
    console.log(data2);
p2.innerHTML=`${parseInt(data2.main.temp)}°C`
pu2.innerHTML=`${data2.weather[0].main}`
switch(data2.weather[0].main){
  case 'Clear':
      im1.src="./sun.jpg"
      break;
  case 'Clouds':
      im1.src="./shomol.jpg"
      break;

  case 'Rain':
      im1.src="./yongir.jpg"
      break;

  case 'Snow':
      im1.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im1.src="./partly cloudy.jpg"
      break;
}
  });


fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=samarkand&units=metric&appid=${APIKey}` 
  )
  
  .then((response3)=>{
    return response3.json();
  })
  .then((data3)=>{
    console.log(data3);
p3.innerHTML=`${parseInt(data3.main.temp)}°C`
pu3.innerHTML=`${data3.weather[0].main}`
switch(data3.weather[0].main){
  case 'Clear':
      im2.src="./sun.jpg"
      break;
  case 'Clouds':
      im2.src="./shomol.jpg"
      break;

  case 'Rain':
      im2.src="./yongir.jpg"
      break;

  case 'Snow':
      im2.src="./qor.jpg"
      break;
  case 'Partly Cloudy':
      im2.src="./partly cloudy.jpg"
      break;
}
  });

fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=xiva&units=metric&appid=${APIKey}` 
  )
  
  .then((response4)=>{
    return response4.json();
  })
  .then((data4)=>{
    console.log(data4);
p4.innerHTML=`${parseInt(data4.main.temp)}°C`
pu4.innerHTML=`${data4.weather[0].main}`
switch(data4.weather[0].main){
  case 'Clear':
      im3.src="./sun.jpg"
      break;
  case 'Clouds':
      im3.src="./shomol.jpg"
      break;

  case 'Rain':
      im3.src="./yongir.jpg"
      break;

  case 'Snow':
      im3.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im3.src="./partly cloudy.jpg"
      break;
}
  });

fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=termez&units=metric&appid=${APIKey}` 
  )
  
  .then((response5)=>{
    return response5.json();
  })
  .then((data5)=>{
    console.log(data5);
p5.innerHTML=`${parseInt(data5.main.temp)}°C`
pu5.innerHTML=`${data5.weather[0].main}`
switch(data5.weather[0].main){
  case 'Clear':
      im4.src="./sun.jpg"
      break;
  case 'Clouds':
      im4.src="./shomol.jpg"
      break;

  case 'Rain':
      im4.src="./yongir.jpg"
      break;

  case 'Snow':
      im4.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im4.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=bukhara&units=metric&appid=${APIKey}` 
  )
  
  .then((response6)=>{
    return response6.json();
  })
  .then((data6)=>{
    console.log(data6);
p6.innerHTML=`${parseInt(data6.main.temp)}°C`
pu6.innerHTML=`${data6.weather[0].main}`
switch(data6.weather[0].main){
  case 'Clear':
      im5.src="./sun.jpg"
      break;
  case 'Clouds':
      im5.src="./shomol.jpg"
      break;

  case 'Rain':
      im5.src="./yongir.jpg"
      break;

  case 'Snow':
      im5.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im5.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=namangan&units=metric&appid=${APIKey}` 
  )
  
  .then((response7)=>{
    return response7.json();
  })
  .then((data7)=>{
    console.log(data7);
p7.innerHTML=`${parseInt(data7.main.temp)}°C`
pu7.innerHTML=`${data7.weather[0].main}`
switch(data7.weather[0].main){
  case 'Clear':
      im6.src="./sun.jpg"
      break;
  case 'Clouds':
      im6.src="./shomol.jpg"
      break;

  case 'Rain':
      im6.src="./yongir.jpg"
      break;

  case 'Snow':
      im6.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im6.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=nukus&units=metric&appid=${APIKey}` 
  )
  
  .then((response8)=>{
    return response8.json();
  })
  .then((data8)=>{
    console.log(data8);
p8.innerHTML=`${parseInt(data8.main.temp)}°C`
pu8.innerHTML=`${data8.weather[0].main}`
switch(data8.weather[0].main){
  case 'Clear':
      im7.src="./sun.jpg"
      break;
  case 'Clouds':
      im7.src="./shomol.jpg"
      break;

  case 'Rain':
      im7.src="./yongir.jpg"
      break;

  case 'Snow':
      im7.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im7.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=andijan&units=metric&appid=${APIKey}` 
  )
  
  .then((response9)=>{
    return response9.json();
  })
  .then((data9)=>{
    console.log(data9);
p9.innerHTML=`${parseInt(data9.main.temp)}°C`
pu9.innerHTML=`${data9.weather[0].main}`
switch(data9.weather[0].main){
  case 'Clear':
      im8.src="./sun.jpg"
      break;
  case 'Clouds':
      im8.src="./shomol.jpg"
      break;

  case 'Rain':
      im8.src="./yongir.jpg"
      break;

  case 'Snow':
      im8.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im8.src="./partly cloudy.jpg"
      break;
}
  });
fetch(
   `https://api.openweathermap.org/data/2.5/weather?q=jizzakh&units=metric&appid=${APIKey}` 
  )
  
  .then((response10)=>{
    return response10.json();
  })
  .then((data10)=>{
    console.log(data10);
p10.innerHTML=`${parseInt(data10.main.temp)}°C`
pu10.innerHTML=`${data10.weather[0].main}`
switch(data10.weather[0].main){
  case 'Clear':
      im9.src="./sun.jpg"
      break;
  case 'Clouds':
      im9.src="./shomol.jpg"
      break;

  case 'Rain':
      im9.src="./yongir.jpg"
      break;

  case 'Snow':
      im9.src="./qor.jpg"
      break;
      case 'Partly Cloudy':
    im9.src="./partly cloudy.jpg"
      break;
}
  });