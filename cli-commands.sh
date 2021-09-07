aws cognito-idp sign-up \
  --region xxx \
  --client-id xx \
  --username admin@example.com \
  --password Passw0rd!

aws cognito-idp admin-confirm-sign-up \
  --region xxx \
  --user-pool-id xxx \
  --username admin@example.com


npx aws-api-gateway-cli-test \
--username='admin@example.com' \
--password='Passw0rd!' \
--user-pool-id='xxx' \
--app-client-id='xxxx' \
--cognito-region='xxx' \
--identity-pool-id='xxx' \
--invoke-url='API_ENDPOINT' \
--api-gateway-region='xx' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'