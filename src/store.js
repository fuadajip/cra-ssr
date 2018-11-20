import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory, createMemoryHistory } from "history";

export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export default (url = "/") => {
  // tell us if we are in server
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();

  return {
    history
  };
};
