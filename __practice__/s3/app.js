const fs = require("fs");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
	apiVersion: "2006-03-01",
	accessKeyId: "", // TODO: add access key here
	secretAccessKey: "", // TODO: add secret access key here
});
const BUCKET_NAME = "165165-new-bucket";
const FILENAME = "test-file.jpg";

function do_script(args) {
	switch (args[2]) {
		case "--upload":
			uploadFile();
			break;
		default:
	}
}
do_script(process.argv);

// upload file
function uploadFile() {
	fs.readFile(FILENAME, (err, streamData) => {
		if (err) throw err;
		const params = {
			Bucket: BUCKET_NAME, // pass your bucket name
			Key: FILENAME, // file will be saved as testBucket/contacts.csv
			Body: streamData,
			// Tagging: "key1=value1&key2=value2"
		};
		s3.upload(params, function (s3Err, data) {
			if (s3Err) throw s3Err;
			console.log(`File uploaded successfully at ${data.Location}`);
		});

		// can use putObject to upload small file
		// var params = {
		//     Bucket: BUCKET_NAME,
		//     Key: FILENAME,
		//     ServerSideEncryption: "AES256",
		//     Tagging: "key1=value1&key2=value2"
		//     Body: streamData,
		// };
		// s3.putObject(params, function(err, data) {
		//     if (err) console.log(err, err.stack); // an error occurred
		//     else console.log(data); // successful response
		// });
	});
}

function createBucketName(bucketName) {
	const params = {
		Bucket: bucketName,
		CreateBucketConfiguration: {
			// Set your region here
			LocationConstraint: "eu-west-1",
		},
	};

	s3.createBucket(params, function (err, data) {
		if (err) console.log(err, err.stack);
		else console.log("Bucket Created Successfully", data.Location);
	});
}
