export KAFKA_BROKER=localhost:9092

cd ~/nodejs-with-kafka/consumer

echo Installing packages required by Node.js app
npm install

echo Starting the node.js app
nohup node ./consumer.js &
