export default {
  getUserId: (event) =>
    event.requestContext.authorizer.iam.cognitoIdentity.identityId,
};
