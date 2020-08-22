var ourData = "";

let forecast = () => {
  // CITY NAME IS HARD CODED

  let cityName = document.querySelector("#textid").value || "pune";

  /*let url =
    "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=pune";
    
     "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;
    */

    let url = "https://api.openweathermap.org/data/2.5/weather?appid=6e7bb04b382bebb306e717f2e70f22a9&units=metric&q=" + cityName;
    console.log(url);

  let xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  var new_ele =  new_ele = document.querySelector(".cmbox").children[0] ;


  xhr.onprogress = () => {
    console.log("Progress........");
  };


  xhr.onload = () => {
    try {
      ourData = JSON.parse(xhr.responseText);
    console.log(ourData);
    let name = ourData.name;
    let temp = ourData.main.temp;

    let parent_ele = document.querySelector(".cmbox");

    // not cloning , updateing the ealier value: by not using cloneNode(true)
    new_ele.textContent = name + " " + temp + " *"
    
    parent_ele.appendChild(new_ele);
      
    } catch (error) {
      var e = error;
      new_ele.textContent = "Wrong Input " + error.code;
      console.log(error.message)  
    }
    finally {
      console.log("this will exucute even after error")
    }


  };
  xhr.send();
};

