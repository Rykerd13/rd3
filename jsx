export default function HeroSection() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <video autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="/drone-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
