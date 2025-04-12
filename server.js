console.log("Hello I am the server js file")
const name = "Junaid khan";


const makeStringCaptitalized = (str) =>{
    const splitStr = str.split(" ");
    const updatedStr = splitStr.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })

    console.log(updatedStr.join(" "));
}


makeStringCaptitalized(name);