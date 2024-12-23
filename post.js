// fetch method
// console.log(fetch("https://dummyjson.com/quotes"));

// asyn/await function


  async function getapidata(){

  const Response=await fetch("https://dummyjson.com/quotes");

  const jsondata=await Response.json();
   console.log(jsondata);
   console.log(jsondata.quotes[0]);
   console.log(jsondata.quotes[0].quote);
  
}

getapidata();


// error handling


async function getapidata(){


    try {
    const Response=await fetch("https://dummyjson.com/quotes");
  
    const jsondata=await Response.json();

    const limit=jsondata.limit;

    for (let i=0; i<limit; i++){

        console.log(jsondata.quotes[i].quote);
      }
    }catch(e) {
        console.log(`err is ${Error}`);
        
    }
    // console.log(jsondata);
    // console.log(jsondata.quotes[0]);
    // console.log(jsondata.quotes[0].quote);
   
};

getapidata();