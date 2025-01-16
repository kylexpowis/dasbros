import VideographyCarousel from "./VideographyCarousel";

export default function VideoCard() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Videography</h2>
      <VideographyCarousel />
    </div>
  );
}
