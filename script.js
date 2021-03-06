$(document).ready(function() {
    
    // save buttons for each hour
    let saveNine = $("#save9");
    let saveTen = $("#save10");
    let saveEleven = $("#save11");
    let saveTwelve = $("#save12");
    let saveOne = $("#save1");
    let saveTwo = $("#save2");
    let saveThree = $("#save3");
    let saveFour = $("#save4");
    let saveFive = $("#save5");

    // input fields (time blocks) for each hour
    let inputNine = $("#input9");
    let inputTen = $("#input10");
    let inputEleven = $("#input11");
    let inputTwelve = $("#input12");
    let inputOne = $("#input1");
    let inputTwo = $("#input2");
    let inputThree = $("#input3");
    let inputFour = $("#input4");
    let inputFive = $("#input5");


    // save input to local storage on click
    $(saveNine).on("click", function() {
        localStorage.setItem(this.id, inputNine.val());        
    });
    inputNine.val(localStorage.getItem("save9"))
    

    $(saveTen).on("click", function() {
        localStorage.setItem(this.id, inputTen.val());        
    });
    inputTen.val(localStorage.getItem("save10"))


    $(saveEleven).on("click", function() {
        localStorage.setItem(this.id, inputEleven.val());        
    });
    inputEleven.val(localStorage.getItem("save11"))
    

    $(saveTwelve).on("click", function() {
        localStorage.setItem(this.id, inputTwelve.val());        
    });
    inputTwelve.val(localStorage.getItem("save12"))
    

    $(saveOne).on("click", function() {
        localStorage.setItem(this.id, inputOne.val());        
    });
    inputOne.val(localStorage.getItem("save1"))
    

    $(saveTwo).on("click", function() {
        localStorage.setItem(this.id, inputTwo.val());        
    });
    inputTwo.val(localStorage.getItem("save2"))
    

    $(saveThree).on("click", function() {
        localStorage.setItem(this.id, inputThree.val());        
    });
    inputThree.val(localStorage.getItem("save3"))
    

    $(saveFour).on("click", function() {
        localStorage.setItem(this.id, inputFour.val());        
    });
    inputFour.val(localStorage.getItem("save4"))
    

    $(saveFive).on("click", function() {
        localStorage.setItem(this.id, inputFive.val());        
    });
    inputFive.val(localStorage.getItem("save5"))
    
    
    // display current date & time, & update time every second
    let updateTime = function() {
        $(".time-block").innerHTML = 
            $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do YYYY" + ", " + "h:mm a"));
    };
    setInterval(updateTime, 1000);

    updateTime();


    // set current hour to variable
    let currentHour = moment().hour();

    // set past, present, and future time slot colors
    if (currentHour === 9) {
        input9.classList.add("present")
    } else if (currentHour > 9) {
        input9.classList.add("past")
    } else if (currentHour < 9) {
        input9.classList.add("future");
    };

    if (currentHour === 10) {
        input10.classList.add("present")
    } else if (currentHour > 10) {
        input10.classList.add("past")
    } else if (currentHour < 10) {  
        input10.classList.add("future");
    };

    if (currentHour === 11) {
        input11.classList.add("present")
    } else if (currentHour > 11) {
        input11.classList.add("past")
    } else if (currentHour < 11) {  
        input11.classList.add("future");
    };

    if (currentHour === 12) {
        input12.classList.add("present")
    } else if (currentHour > 12) {
        input12.classList.add("past")
    } else if (currentHour < 12) {  
        input12.classList.add("future");
    };

    if (currentHour === 13) {
        input1.classList.add("present")
    } else if (currentHour > 13) {
        input1.classList.add("past")   
    } else if (currentHour < 13) {  
        input1.classList.add("future");
    };

    if (currentHour === 14) {
        input2.classList.add("present")
    } else if (currentHour > 14) {
        input2.classList.add("past")
    } else if (currentHour < 14) {  
        input2.classList.add("future");
    };

    if (currentHour === 15) {
        input3.classList.add("present")
    } else if (currentHour > 15) {
        input3.classList.add("past")
    } else if (currentHour < 15) {  
        input3.classList.add("future");
    };

    if (currentHour === 16) {
        input4.classList.add("present")
    } else if (currentHour > 16) {
        input4.classList.add("past")
    } else if (currentHour < 16) {  
        input4.classList.add("future");
    };

    if (currentHour === 17) {
        input5.classList.add("present")
    } else if (currentHour > 17) {
        input5.classList.add("past")                
    } else if (currentHour < 17) {  
        input5.classList.add("future");
    };

});