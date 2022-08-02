import { rest } from "msw";
import {
  loginRoute,
  productsRoute,
  registerRoute,
} from "../api/APIRoutesAndQueryVariables";
import { mockProducts } from "./mockProducts";

export const mockToken = "token";

export const handlers = [
  rest.post(loginRoute, (req, res, ctx) => res(ctx.status(200))),
  rest.post(registerRoute, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockToken }))
  ),

  rest.get(productsRoute(), (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        products: mockProducts,
      })
    )
  ),
];
