for(let counteri=1; counteri<=4; counteri++) {
    document.write("*");
    document.write("<br/>");   //output single single 4 star will come
}

for(let counteri=1; counteri<=4; counteri++) {

    for(let counterj=1; counterj<=4; counterj++) {
        document.write("*");
    }                            //output 4lines will execute with each line having 4stars
    document.write("<br/>");
}


for(let counteri=1; counteri<=4; counteri++) {           //Nested Loop

    for(let counterj=1; counterj<=counteri; counterj++) {
        document.write("*");
    }                            
    document.write("<br/>");
}