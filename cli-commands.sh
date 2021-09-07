aws cognito-idp sign-up \
  --region eu-west-1 \
  --client-id 5mmabhr9q5if253t5bfc3hui4p \
  --username admin@example.com \
  --password Passw0rd!


  {
    "UserConfirmed": false,
    "CodeDeliveryDetails": {
        "Destination": "a***@e***.com",
        "DeliveryMedium": "EMAIL",
        "AttributeName": "email"
    },
    "UserSub": "0077ea19-d6f6-4461-9048-f7193fc48a41"
}

aws cognito-idp admin-confirm-sign-up \
  --region eu-west-1 \
  --user-pool-id eu-west-1_5MmAnA9x9 \
  --username admin@example.com


npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='eu-west-1_5MmAnA9x9' \
--app-client-id='5mmabhr9q5if253t5bfc3hui4p' \
--cognito-region='eu-west-1' \
--identity-pool-id='eu-west-1:58afb272-aecd-4c6b-b910-a35b9e8f95b3' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='eu-west-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'