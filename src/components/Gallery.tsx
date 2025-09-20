import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const imageFiles = [
  "IMG-20250919-WA0001.jpg",
  "IMG-20250919-WA0002.jpg",
  "IMG-20250919-WA0003.jpg",
  "IMG-20250919-WA0004.jpg",
  "IMG-20250919-WA0005.jpg",
  "IMG-20250919-WA0040.jpg",
  "IMG-20250919-WA0041.jpg",
  "IMG-20250919-WA0042.jpg",
  "IMG-20250919-WA0043.jpg",
  "IMG-20250919-WA0044.jpg",
  "IMG-20250919-WA0045.jpg",
  "IMG-20250919-WA0046.jpg",
  "IMG-20250919-WA0047.jpg",
  "IMG-20250919-WA0048.jpg",
  "IMG-20250919-WA0049.jpg",
  "IMG-20250919-WA0050.jpg",
  "IMG-20250919-WA0051.jpg",
  "IMG-20250919-WA0052.jpg",
  "IMG-20250919-WA0053.jpg",
  "IMG-20250919-WA0054.jpg",
  "IMG-20250919-WA0055.jpg",
  "IMG-20250919-WA0056.jpg",
  "IMG-20250919-WA0057.jpg",
  "IMG-20250919-WA0058.jpg",
  "IMG-20250919-WA0060.jpg",
  "siyalele 2.jpg",
  "siyalele 3.jpg",
  "siyalele.jpg",
];

const VISIBLE_COUNT = 3; // Changed to 3 for better focus on individual images

const Gallery: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Circular logic for visible images
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      images.push(imageFiles[(startIdx + i) % imageFiles.length]);
    }
    return images;
  };

  const handlePrev = () => {
    setStartIdx((prev) =>
      prev === 0 ? imageFiles.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % imageFiles.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-slide functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 5000); // Slower for professional feel
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Format image name for display
  const formatImageName = (filename: string) => {
    return filename
      .replace(/\.[^/.]+$/, "")
      .replace(/IMG-\d{8}-WA\d{4}/, "Project Image")
      .replace(/siyalele/gi, "Siyalele Project");
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-800 dark:text-slate-100">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-slate-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Showcasing our expertise in mining, engineering, and consulting solutions
          </p>
        </div>

        {/* Gallery Controls */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 rounded-full px-6 py-3 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="w-px h-6 bg-slate-300 dark:bg-slate-600"></div>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {startIdx + 1} - {Math.min(startIdx + VISIBLE_COUNT, imageFiles.length)} of {imageFiles.length}
            </span>
          </div>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-300 dark:border-slate-600 shadow-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-200"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-300 dark:border-slate-600 shadow-lg hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all duration-200"
            aria-label="Next images"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Image Container */}
          <div className="overflow-hidden rounded-2xl">
            <div className="flex justify-center items-center gap-8 py-8">
              {getVisibleImages().map((file, idx) => (
                <Card
                  key={file + idx}
                  className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-slate-800 border-0"
                  style={{ minWidth: "300px", maxWidth: "350px" }}
                >
                  <div className="relative">
                    <img
                      src={`/lovable-uploads/${file}`}
                      alt={formatImageName(file)}
                      className="w-full h-64 object-cover transition-all duration-500 group-hover:brightness-110"
                      loading="lazy"
                      onClick={() => setSelectedImage(file)}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-lg mb-2">
                          {formatImageName(file)}
                        </h3>
                        <p className="text-slate-200 text-sm">
                          Click to view full size
                        </p>
                      </div>
                    </div>

                    {/* Professional Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-orange-600/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                        Siyalele Projects
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(imageFiles.length / VISIBLE_COUNT) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIdx(idx * VISIBLE_COUNT)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.floor(startIdx / VISIBLE_COUNT) === idx
                    ? "bg-orange-600 scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full-size image viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={`/lovable-uploads/${selectedImage}`}
              alt={formatImageName(selectedImage)}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              ×
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
