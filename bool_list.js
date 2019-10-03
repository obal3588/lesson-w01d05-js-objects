const book3={
    title : "The Hobbit ",
    author :" J.R.R",
    alreadyRead: false,

};

const book1={
    title : "high speed signal ",
    author :" null",
    alreadyRead: true,

};
const book2={
    title : " null",
    author :" null",
    alreadyRead: false,

};


const reading_list= [book1,book2,book3]
 for (let i=0 ; i< reading_list.length;i++){
        if (reading_list[i].alreadyRead)

            console.log ("You already read "+reading_list[i].title + " by" +reading_list[i].author);
        else 
        console.log ("You still need to read "+reading_list[i].title + " by" +reading_list[i].author);

     }
