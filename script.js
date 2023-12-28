

 let country = {
    "india" :"ind",
    "china": "chi",
    "unites_state" : "usa",
    "united_Kingdom ": "uk",
    "antarticka" :"ak"
  }

  let countryKey =Object.keys(country);
  let countryValues = Object.values(country)
  
  // for loop
//console.log("------------ forloop_______________")

  for(let i=0;i<countryKey.length;i++){
    console.log(` Name of the country : ${countryKey[i]},
    Short simple of the country : ${countryValues[i]}
    `)

  }

  // for in

//console.log("------------ for in_______________")
  for(key in country){
    console.log(`
    name opf the country :${key},
    Short Form of country :${country[key]}
    
    `)
  }

  // for each
 // console.log("------------ for each_______________")

  countryKey.forEach((values ) => {
    console.log(` 
    name opf the country :${values},
    Short Form of country :${country[values]}
    `)
    
  });

  // for off



  //console.log("---------------for off----------------")
  for(key of countryKey){
    console.log(`
    name opf the country :${key},
    Short Form of country :${country[key]}
    
    `)
  }

 
