import { createFileRoute } from "@tanstack/react-router";

import { BallroomPlaylistPage } from "../pages/BallroomPlaylistPage";

export const Route = createFileRoute("/ballroom_playlist")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BallroomPlaylistPage />;
}
