export KAFKA_BROKER=localhost:9092

cd ~/nodejs-with-kafka/consumer

echo Installing packages required by Node.js app
npm install

npm install @splunk/otel
export OTEL_SERVICE_NAME=consumer
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=test'

echo Starting the node.js app
nohup node -r @splunk/otel/instrument ./consumer.js &
