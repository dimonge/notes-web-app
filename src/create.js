import * as uuid from "uuid";

import dynamodb from "./utils/dynamodb";
import handler from "./utils/handler";

export const main = handler(async (event) => {
  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: "123",
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now(),
    },
  };

  await dynamodb.put(params);
  return params.Item;
});
