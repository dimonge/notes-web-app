import handler from "./utils/handler";
import dynamodb from "./utils/dynamoDb";
import * as utils from "./utils";

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: utils.getUserId(event),
      noteId: event.pathParameters.id,
    },
  };
  await dynamodb.delete(params);

  return { status: true };
});
