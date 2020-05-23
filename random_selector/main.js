
$(document).ready(function(){
    $("input").click(function(){
        
        //Math.random():0-0.99999...
        let numberOfListItem = $("#choice li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("#random-result").text($("#choice li").eq(randomChildNumber).text());
        console.log(randomChildNumber);
        let random_images_array = ['random_selector/0.jpg', 'random_selector/1.jpg', 'random_selector/2.jpg'];
        $("#random-pic").attr("src", random_images_array[randomChildNumber]);

    });
});




