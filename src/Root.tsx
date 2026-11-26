import { Composition } from "remotion";
import { Video } from "./Video";

export const Root = () => (
  <Composition
    id="Perkenalan"
    component={Video}
    durationInFrames={450}
    fps={30}
    width={1280}
    height={720}
  />
);
