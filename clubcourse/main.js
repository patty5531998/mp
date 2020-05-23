$(document).ready(function(){

    setTable();

    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1], splitText[2]);
        setTable();

    })

    
});

function setTable(){
    $("#courseTable").empty();

    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    let topicCount = topicsArray.length;
    
    let oneDayMilliseconds = 24*60*60*1000;
    
    //var table=document.getElementById("courseTable");

    for(let x=0; x<topicCount; x++){

        let thisDate = new Date(startDate.getTime()+7*x*oneDayMilliseconds);
        var tr_special = "<tr class = 's1'>";

        if(topicsArray[x] == "尚未開學" || topicsArray[x] == "國定假日"){
            tr_special = "<tr class = 's2'>";
        }

        $("#courseTable").append(
            tr_special+    
            "<td>"+ (x+1) +"</td>"+
            "<td class = column>"+ thisDate.toLocaleDateString().slice(5) +"</td>"+
            "<td>"+ topicsArray[x]+ "</td>"+
            "</tr>"
       
        );        
       
       
    }

}