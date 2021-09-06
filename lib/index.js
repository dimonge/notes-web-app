import ApiStack from "./ApiStack";
import StorageStack from "./StorageStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });
  const storage = new StorageStack(app, "storage");

  new ApiStack(app, "api", {
    table: storage.table,
  });
}
