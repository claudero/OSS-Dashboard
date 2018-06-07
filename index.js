var ForgeSDK = require('forge-apis');
var CLIENT_ID = 'LGtxWKGWjgkd2dx14YYlZjjSuXeWJSeH' , CLIENT_SECRET = 'G3AA9OXhhj4Xz8Rr';


// Initialize the relevant clients; in this example, the Hubs and Buckets clients (part of the Data Management API).
var HubsApi = new ForgeSDK.HubsApi(); //Hubs Client
var BucketsApi = new ForgeSDK.BucketsApi(); //Buckets Client


// Initialize the 2-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true; // or false

var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(CLIENT_ID, CLIENT_SECRET, [
    'data:read',
    'data:write'
], autoRefresh);

oAuth2TwoLegged.authenticate().then(function(credentials){

    console.log("credentials")
    console.log(credentials)

// Get the buckets owned by an application.
// Use the oAuth2TwoLegged client object and the credentials object that were
// obtained from the previous step
// notice that you need do add a bucket:read scope for the getBuckets to work
    BucketsApi.getBuckets({}, oAuth2TwoLegged, credentials).then(function(buckets){
        console.log("buckets");
        console.log(buckets);
    }, function(err){
        console.log("buckets");
        console.error(err);
    });
/*
// Get the hubs that are accessible for a member.
// Use the oAuth2ThreeLegged client object and the credentials object that were
// obtained from the previous step
    HubsApi.getHubs({}, oAuth2ThreeLegged, credentials).then(function(hubs) {
        console.log("hubs");
        console.log(hubs);
    }, function(err){
        console.log("hubs");
        console.error(err);
    });*/


    }, function(err){
    console.error(err);
});



