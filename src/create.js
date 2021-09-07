import * as uuid from "uuid";

import handler from "./utils/handler";
import dynamodb from "./utils/dynamodb";
import * as utils from "./utils";
export const main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: utils.getUserId(event),
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamodb.put(params);
  return params.Item;
});
