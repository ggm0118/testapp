const aws = require('aws-sdk');
const config = require('./config.json');

function getfolder(){
    (async function() {
        try{
            aws.config.setPromisesDependency();
            aws.config.update({
                accessKeyId : config.aws.accessKeyId,
                secretAccessKey : config.aws.secretAccessKey,
                region : config.aws.region
                
            });

            const s3 = new aws.S3();
            var i;
            var keys = [];
            const response = await s3.listObjectsV2({
                Bucket : 'reactimg194502-dev',
                Prefix : 'Trucks/VNL300'
                
            }).promise();

            var myObj = response;
            for (i in myObj.Contents) {
                keys += myObj.Contents[i].Key + ',';
                
                
            }

            
            console.log(keys);

        } catch (e) {
            console.log('error !', e);
        }

        debugger;
        
    })(); 
} export default getfolder;