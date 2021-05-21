# Subscriber Topics

To run this application, ensure that you have a Mongo DB instance running on your machine and then set up environment variables as seen in the env.example file(s).
Then install all the dependencies using by running `yarn` in the directories of the publisher and subcriber respectively.<br> Then inside each directory, the script "compile" should be run using `yarn compile` to transpile into JavaScript.<br><br>
The server can then be run using `yarn start`.
<br><br>
To subscribe, send a POST request the publisher at route '/subscribe/{topic} where the Topic is any string. The body of the request takes one `url` parameter that is the URL of the endpoint that future pulish messages should be sent to.<br>
To publish, send a POST request to '/publish/{topic} and the payload can be any valid JSON object is to be broadcast.
<br><br>
After the repo has been cloned, run `yarn` in the two directories
and then use `start-server.sh` to start the servers. <br>
Once the servers are running, `sample.sh` makes sample CURL calls to the servers, both to subscribe to a topic and publish from it. <br><br>
NOTE: Remember to run `stop-server.sh` to stop the servers or they'll keep running in the background. 
<br><br>
Thank you for reading this far. <br>
I'm more than happy to answer any questions you have about this project.