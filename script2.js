// facebook

// var database = [
//     {
//         username: "henry",
//         password: "supersecret"
//     }
// ]

// var newsfeed = [
//     {
//        username: "Micheal",
//        timeline: "I've been so busy during school" 
//     },
//     {
//         username: "Vivian",
//         timeline: "Does anyone know how to program"
//     },
//     {
//         username: "Mercy",
//         timeline: "Learning is soooo coool"
//     }
// ]

// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("Whatis your password?");

// function signIn(user, pass) {
//     if (user === database[0].username &&
//         pass === database[0].password) {
//             console.log(newsfeed);
//         } else {
//             alert("Wrong username and password")
//         }
// } 

// signIn (userNamePrompt, passwordPrompt);



// <!-- <script type="text/javascript" src="script.js">
// </script> -->

















// facebook

var database = [
    {
        username: "henry",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
]

var newsfeed = [
    {
       username: "Micheal",
       timeline: "I've been so busy during school" 
    },
    {
        username: "Vivian",
        timeline: "Does anyone know how to program"
    },
    {
        username: "Mercy",
        timeline: "Learninng is sooo coool"
    }
]

// function isUserValid(username, password){
//     for (var i=0; i < database.length; i++) {
//         if(database[i].username === username &&
//             database[i].password === password) {
//                return true;
//             } 
//         }
//         return false;
// }

// function signIn(username, password) {
//     if (isUserValid(username,password)) {
//         console.log(newsfeed);
//     } else {
//         alert("Wrong username and password")
//     }
// }

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password){
                return true;
            } 
    } 
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsfeed);
    } else {
        alert("Sorry, wrong username nad password")
    }
}
//     for (var i=0; i < database.length; i++) {
//         if (database[i].username === username &&
//             database[i].password === password){
//                 console.log(newsfeed);   
//             } else{
//                 alert("Sorry, wrong username and password")
//             }
//     } 
// }

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Whatis your password?");

signIn (userNamePrompt, passwordPrompt);














//  Navbar 
//  <div class="navbar">
//     <div class="container flex">
//         <h1 class="logo">Intercon</h1>
//         <nav>
//             <ul>
//                 <li><a href="home.html">Home</a></li>
//                   <li><a href="#">Mail</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>
//     </div>
// </div>

//  Showcase
// <section class="showcase">
//     <div class="container grid">
//         <div class="showcase-text">
//             <h1>Easier Deployment</h1>
//             <p>Deploy web apps of all  kinds from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform</p>
//             <a href="features.html" class="btn btn-outline">Read More</a>
//         </div> 
//      </div>
//     </div> 
//   </div>
// </div>
// </section> 