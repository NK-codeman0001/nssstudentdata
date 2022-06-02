
const passSecure =() =>{
    const passAdmin="notmebutyou";
    const passCode= window.prompt("Enter Passcode");
    if (passCode==passAdmin){
        window.alert("Welcome Admin, Jai Hind");
    }
    else {
        window.location="https://www.instagram.com/_neeraj_dev_/";
    }
}
// passSecure();



