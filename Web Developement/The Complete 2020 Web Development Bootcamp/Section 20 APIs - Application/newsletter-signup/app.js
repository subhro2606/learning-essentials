const express = require("express");
const bodyparser = require("body-parser");


//Requiring mailchimp's module
//For this we need to install the npm module @mailchimp/mailchimp_marketing. To do that we write:
//npm install @mailchimp/mailchimp_marketing
const mailchimp = require("@mailchimp/mailchimp_marketing");



//Requiring express and body parser and initializing the constant "app"
app = express();

//Setting up MailChimp
mailchimp.setConfig({
  apiKey: "4c35b1590d8e1f014fa33cc7bcaba7b3-us17",
  //apiKey: "4c35b1590d8e1f014fa33cc7bcaba7b3AA-us17",
  server: "us17"
});

/*For serving static files we use the following. Note folder named "public" should be created where static content needs to be placed*/
app.use(express.static("public"));


app.use(bodyparser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});


//As soon as the sign in button is pressed execute this
app.post("/", function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  console.log(firstName + " " + lastName + " was signed up succesfully. You will get newsletters at " + email);
  const listId = "ed03d619dc";
  //Creating an object with the users data
  subscribingUser = {
    firstName: firstName,
    lastName: lastName,
    email: email
  };
  //Uploading the data to the server
  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });
    //If all goes well logging the contact's id
    res.sendFile(__dirname + "/success.html");
    console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
  }

  //Running the function and catching the errors (if any)
    // ************************THIS IS THE CODE THAT NEEDS TO BE ADDED FOR THE NEXT LESSON*************************
    // So the catch statement is executed when there is an error so if anything goes wrong the code in the catch code is executed. In the catch block we're sending back the failure page. This means if anything goes wrong send the faliure page
  run().catch(e => res.sendFile(__dirname + "/failure.html"));
});

/*process.env.PORT || 3000 -> This is to allow ports to be dynamically assigned by Heroku*/
app.listen(process.env.PORT || "3000", function() {
  console.log("newsletter-signup app started in port 3000");
});

/*Redirecting from Failure*/
app.post("/failure", function(req, res) {
  res.redirect("/");
});
