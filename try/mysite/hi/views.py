from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
def me(request):
    return HttpResponse("hi, welcome to my world")
def mine(request):
    return HttpResponse("hi, welcome ")
def check(request):
    return HttpResponse("""<html>
    <body>
        <h1 onclick="this.innerHTML='wow'">WELCOME</h1>
        
    </body>
</html>""")
def form(request):
    return HttpResponse("""<html>
    <head>
        <style>
            h1{
                text-align: center;
            }
            body{

                text-align: center;
                
            }
            form{
                background-color: aqua;
                max-width: 500px;
                margin: 50px auto;
                padding: 30px 20px;
                box-shadow: 2px 5px 10px rgba(23,23,23,23);
                
            }
            #submit
            {

                background-color: rgb(225, 132, 207);
                
            }

        </style>
        <script>
            function abc()
            {
                var x=document.getElementById("name").value
                var y=document.getElementById("country").value
                var z=document.getElementById("rate").value
                var q=document.getElementById("suggestion").value
                
                alert("name :"+x+"\n"+"Training attended :"+y+"\n"+"Overall Ratting :"+z+"\n"+"Suggestions:"+q);
            }

        </script>
    </head>
        <body><h1>Faculty Feedback Form</h1>
            <form>
                <label for="name">Faculty Name:</label><br>
                <input type="text" id="name"><br>
                <label for ="training">Training attended:</label> <br>             
                    <select id="country" required>
        <option value="select">--Select course--</option>
        <option value="python">python</option>
        <option value="Java">Java</option>
        <option value="ADBMS">ADBMS</option>
        <option value="SQL">SQL</option>
      </select><br>  <div id="rate">
      <label for="rating">Overall Rating:</label><br>
      <input type="radio" name="rate" id="rate"></input><label for="excellent">Excellent</label>
      <input type="radio" name="rate"id="rate"></input><label for="Good">Good</label><br>
      <input type="radio" name="rate"id="rate"></input><label for="Average">Average</label>
      <input type="radio" name="rate"id="rate"></input><label for="Poor">Poor</label><br>
    </div>
      <label for="topic">Topics Covered:</label><br>
      <input type="checkbox" name="con">Content Quality</input><br>
       <input type="checkbox" name="Del">Delivery</input><br>
        <input type="checkbox" name="Int">Interaction</input><br>
        <input type="checkbox" name="Rel">Relevance</input><br>
        
         <label for="suggestion">Suggention/Comments:</label><br>
         <textarea id ="suggestion"name="textarea" palceholder="write your feedback here..."></textarea><br><br>
         <button id="submit"type="submit" onclick="abc()">Submit Feedback</button>



               
    </form>
        </body>
</html>""")
def call(request):
     print(me(request))
     print(mine(request))
     print(check(request))
     print(form(request))
     return HttpResponse()
        
    
        
    
