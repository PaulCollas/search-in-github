import express from "express";

export function launch(port) {
  const application = express();

  application.get("/api/users/:username", (request, response) => {
    // Step 1 - Does User exist in our Database
    //   If True  -> Retrieve from our Database
    //   If False -> Request Github API https://api.github.com/users/$USERNAME
    //            -> Store User information in our Database

    response.json({ username: request.params.username });
  });

  application.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
}
