import { createFileRoute } from "@tanstack/react-router";

import { AboutMePage } from "../pages/AboutMePage";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AboutMePage />;
}
