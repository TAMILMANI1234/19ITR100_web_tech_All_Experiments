http=require("http");
url= require("url");
querystring =require("querystring");


function onRequest(request,response){
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

          
            if (body.length > 1e6)
            request.connection.destroy();
        });

        request.on('end', function () {
            var post = querystring.parse(body);
            response.writeHead(200,{"Content-Type":"text/html"});
            response.write("<br>");
           response.write("<br>");
          
            response.write("<center>");
            response.write("<h1> Hello "+post['name']+" Your Details get by 'POST' Method</h1>");
            response.write("<div style ='background-color:White ; border-radius:80px;width:60%;box-shadow: 10px 10px 8px 10px'>");
            response.write("<br>");
            response.write("<br>");
            response.write("<h3>Name : "+post['name']+"</h3>");
            response.write("<h3>ID : "+post['id']+"</h3>");
            response.write("<h3>Organisation: "+post['Organisation']+"</h3>");
            response.write("<h3>Gender : "+post['gender']+"</h3>");
            response.write("<h3>Branch : "+post['branch']+"</h3>");
            response.write("<h3>Phone: "+post['phone:']+"</h3>");
            response.write("<h3>Email : "+post['email']+"</h3>");
            response.write("<h3>Experience:"+post['ex']+"</h3>");
            response.write("<br>");
            response.write("<br>");
            response.write("</div>");
           
            response.write("</center>");
            response.end();

        });
    }
  
    else  if(request.method=='GET'){
            var path=url.parse(request.url).pathname;
            console.log("Request for "+path+"Received");
            var query=url.parse(request.url).query;
            var name=querystring.parse(query)["name"];
            var id=querystring.parse(query)["id"];
            var Organisation=querystring.parse(query)["Organisation"];
            var Gender=querystring.parse(query)["gender"];
            var Branch=querystring.parse(query)["branch"];
            var phone=querystring.parse(query)["phone"];
            var email=querystring.parse(query)["email"];
            var ex=querystring.parse(query)["ex"];


           response.writeHead(200,{"Content-Type":"text/html"});
           response.write("<br>");
           response.write("<br>");
           response.write("<br>");
          response.write("<center>");
          response.write("<h1> Hello "+name+" Your Details get by 'GET' Method</h1>");
        response.write("<div style ='background-color:white; border-radius:70px;width:60% ; box-shadow: 10px 10px 8px 10px'>");
        response.write("<br>");
        response.write("<br>");
            response.write("<h2> Name:"+name+"</h2>");
            response.write("<h2> ID:"+id+"</h2>");
            response.write("<h2> Organisation:"+Organisation+"</h2>");
            response.write("<h2> Gender:"+Gender+"</h2>");
            response.write("<h2> Branch:"+Branch+"</h2>");
            response.write("<h2> Phone:"+phone+"</h2>");
            response.write("<h2>Email:"+email+"</h2>");
            response.write("<h2>Experience:"+ex+"</h2>");
            response.write("<br>");
           response.write("<br>");
           response.write("<br>");
        response.write("</div>");
        response.write('</center>');
            response.end();
   }
}

http.createServer(onRequest).listen(7777);
console.log("Server is Running....... at 7777");