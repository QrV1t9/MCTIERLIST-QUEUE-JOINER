javascript:
var status = "";
alert("Meowzers' Queue Joiner Active!");
var i = setInterval(() => {
    try {
        if (document.getElementsByClassName("defaultColor__4bd52 text-md/medium_cf4812 defaultColor__5345c title__9293f")[0].innerHTML.includes("waitlist")) {
        if (!document.getElementsByClassName("gridContainer__623de")[0].innerHTML.includes(document.getElementsByClassName("text-sm/medium_cf4812 title_b6c092")[0].innerHTML)) {
            if (!document.getElementsByClassName("gridContainer__623de")[0].innerHTML.includes("No Testers Online")) {
                if (document.getElementsByClassName("gridContainer__623de")[0].getElementsByTagName("li").length < 21) {
                    document.getElementsByClassName("gridContainer__623degridContainer__623de")[0].click();
                    console.log("-----------------------");
                    console.log("");
                    console.log("Attempted to join queue!");
                    console.log("");
                    console.log("-----------------------");
                } else {
                    status = "Queue full :/"
                }
            } else {
                status = "No testers online :/"
            }
        } else {
            status = "Your in the queue! :D"
        }
    } else {
        clearInterval(i);
        alert("ERROR\nNot in proper channel :/\nAborting.");
        
    }
    } catch {
        clearInterval(i);
        alert("ERROR\nServer changed\nAborting.\nPlease rerun!")
    }
    

});
