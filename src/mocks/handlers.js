// module where we will have all our request handlers. The handlers from this module can be reused for both browser and Node
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("isAuthenticated", true);
  }),
  return res(ctx.sta)

  rest.get("/user", null),
];
