function multiTable(){
    const num =5;
    let result = 0;
    document.write(`<h1>Table of ${num}</h1>`);
    for(let i=2;i<11;i++){
        result = num *i;
        document.write(`<p> ${result} </p>`);
    }

}

//multiTable();

for(let i=0;i<4;i++){
    document.write("My for is working?");
}


for(let i=2;i<21;i+=2){
    document.write(`<p>${i}</p>`)
}


//document.write("<p> 2 x 0 =" + 2*0 + "<p>");
//document.write("<p> 2 x 1 =" + 2*1 + "<p>");
//document.write("<p> 2 x 3 =" + 2*2 + "<p>");
//document.write("<p> 2 x 2 =" + 2*3 + "<p>");
//document.write("<p> 2 x 4 =" + 2*4 + "<p>");
//document.write("<p> 2 x 5 =" + 2*5 + "<p>");
//document.write("<p> 2 x 6 =" + 2*6 + "<p>");
//document.write("<p> 2 x 7 =" + 2*7 + "<p>");
//document.write("<p> 2 x 8 =" + 2*8 + "<p>");
//document.write("<p> 2 x 9 =" + 2*9 + "<p>");
//document.write("<p> 2 x 10 =" + 2*10 + "<p>");



    //document.write("<p> 2 x 0 = " + 2*i + "</p>");

    let students = ["Jose","Michael","Samson","Kit","Angel","Johnathan","Andrew"];
    let ages =[22,35,20,43,37,33,27];
    
    for(let i= 0; i<6;i++){
        document.write(`<p> ${i+1}. ${students[i]} </p>`)
    }