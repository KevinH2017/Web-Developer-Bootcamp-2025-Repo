import "./App.css";

export default function AnimatedGif({ src, alt, isLoading }) {
  return (
    <img
      src={src}
      alt={alt}
      className="Loader"
      style={{ opacity: isLoading ? 1 : 0 }}
    />
  );
}
