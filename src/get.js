import handler from "./utils/handler";
import dynamoDb from "./utils/dynamodb";
import * as utils from "./utils";
export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: utils.getUserId(event),
      noteId: event.pathParameters.id,
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }
  return result.Item;
});
