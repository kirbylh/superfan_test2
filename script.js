const menuItems = document.querySelectorAll('.sidebar li');
const menuContents = document.querySelectorAll('.menu-content');

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        menuItems.forEach((item) => {
            item.classList.remove('active');
        });

        //Hide all menu contents
        menuContents.forEach((content) => {
            content.style.display = 'none';
        });

        //Add 'active' class when a menu item is clicked
        menuItem.classList.add('active');

        //Show the related content for the clicked menu item
        menuContents[index].style.display = 'block';

    });

});

var myForm = document.getElementById("myForm");
var submitButton = document.getElementById("submitVideo");
var afterSubmission = document.getElementById("afterSubmission");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    beforeSubmission.style.display="none";

    afterSubmission.classList.remove('hidden');
});

const votes = document.querySelectorAll('.voteButton');

votes.forEach((vote) =>{
    vote.addEventListener('click', function(){
        vote.classList.toggle('button-active');
    })
})

var voting = document.getElementById("submitVotes");
var beforeVoting = document.getElementById("beforeVoting")
var afterVoting = document.getElementById("afterVoting")

voting.addEventListener('click', function(event){
    event.preventDefault();

    beforeVoting.style.display='none';

    afterVoting.classList.remove('hidden');
})

var quiz = document.getElementById("submitQuiz");
var afterQuiz = document.getElementById("afterQuiz");

quiz.addEventListener('click', function(event){
    event.preventDefault();
    beforeQuiz.style.display ="none";
    afterQuiz.classList.remove('hidden');
});


var createAcc = document.getElementById('createAcc');
var signup = document.getElementById('signup');
var login = document.getElementById('login');


//From Login to SignUp
createAcc.addEventListener('click', function(event){
    event.preventDefault();
    login.style.display = "none";
    signup.classList.remove("hidden");
});

//SignUp back to LogIn
var account = document.getElementById('account');
var signUpButton = document.getElementById('create')

signUpButton.addEventListener('click', function(event){
    event.preventDefault();
    signup.style.display = "none";
    account.classList.remove("hidden");
});

var signin = document.querySelectorAll(".signin");
var finishLogIn = document.getElementById("finish");

signin.forEach((signIn) => {
    signIn.addEventListener("click", function(event){
        event.preventDefault();
        login.style.display="none";
        account.style.display="none";
        finishLogIn.classList.remove("hidden");
    });
})
