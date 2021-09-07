import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import StorageStack from "../lib/StorageStack";

test("Test StorageStack", () => {
  const app = new sst.App();

  const stack = new StorageStack(app, "test-stack");

  expect(stack).to(
    haveResource("AWS::DynamoDB::Table", {
      BillingMode: "PAY_PER_REQUEST",
    })
  );
});
