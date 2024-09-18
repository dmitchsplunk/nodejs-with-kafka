export KAFKA_BROKER=localhost:9092

cd ~/nodejs-with-kafka/producer

echo Installing packages required by Node.js app
npm install

npm install @splunk/otel
export OTEL_SERVICE_NAME=producer
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=test'

echo Starting the node.js app
nohup node -r @splunk/otel/instrument ./producer.js &
