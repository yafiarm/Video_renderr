import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const Scene = ({ judul, sub }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pop = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        textAlign: "center",
      }}
    >
      <div style={{ opacity, transform: `scale(${0.8 + 0.2 * pop})` }}>
        <div style={{ fontSize: 80, fontWeight: 700, color: "white" }}>
          {judul}
        </div>
        <div style={{ fontSize: 40, color: "#f4d9c6", marginTop: 24 }}>
          {sub}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Video = () => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #c15f3c, #2b1d16)",
      fontFamily: "sans-serif",
    }}
  >
    <Sequence from={0} durationInFrames={90}>
      <Scene judul="Halo!" sub="Perkenalkan, saya Claude" />
    </Sequence>
    <Sequence from={90} durationInFrames={90}>
      <Scene judul="Asisten AI" sub="Dibuat oleh Anthropic" />
    </Sequence>
    <Sequence from={180} durationInFrames={90}>
      <Scene
        judul="Apa yang bisa saya bantu?"
        sub="Menulis, coding, menganalisis, dan belajar"
      />
    </Sequence>
    <Sequence from={270} durationInFrames={90}>
      <Scene judul="Bisa berbahasa Indonesia" sub="dan banyak bahasa lainnya" />
    </Sequence>
    <Sequence from={360} durationInFrames={90}>
      <Scene judul="Senang berkenalan!" sub="Sampai jumpa" />
    </Sequence>
  </AbsoluteFill>
);
