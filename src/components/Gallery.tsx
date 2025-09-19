import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const VISIBLE_COUNT = 4; // Number of images visible at once

const Gallery: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

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

  // Optional: auto-slide every 4s
   React.useEffect(() => {
     const interval = setInterval(handleNext, 4000);
     return () => clearInterval(interval);
   }, []);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight text-primary">
          Gallery
        </h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-background/80 hover:bg-background/90 shadow-md"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Sliding Images */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(0)`,
                gap: "1.5rem",
                justifyContent: "center",
              }}
            >
              {getVisibleImages().map((file, idx) => (
                <Card
                  key={file + idx}
                  className="overflow-hidden rounded-xl shadow-md bg-background min-w-[220px] max-w-xs mx-auto"
                >
                  <img
                    src={`/lovable-uploads/${file}`}
                    alt={file.replace(/\.[^/.]+$/, "")}
                    className="w-full h-48 object-cover transition-all duration-300 hover:brightness-90"
                    loading="lazy"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 z-10 bg-background/80 hover:bg-background/90 shadow-md"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;