"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "WHOLESALE & RETAIL",
    subtitle: "Premium Agricultural Products",
    description: "Direct from Karnataka's fertile regions to your doorstep",
    image: "/placeholder.svg?height=600&width=1200",
    gradient: "from-green-400 to-green-600",
  },
  {
    id: 2,
    title: "ORGANIC GRAINS & PULSES",
    subtitle: "Farm Fresh Quality",
    description: "Sourced directly from local farmers with fair trade practices",
    image: "/placeholder.svg?height=600&width=1200",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    id: 3,
    title: "NUTRITIOUS MILLETS",
    subtitle: "Traditional Superfoods",
    description: "Ragi, Jowar, and Bajra - Karnataka's nutritional treasures",
    image: "/placeholder.svg?height=600&width=1200",
    gradient: "from-lime-400 to-lime-600",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`} />
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-full lg:max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-4 font-semibold">
                {slide.subtitle}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 opacity-90 max-w-lg">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base"
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Products
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 px-6 sm:px-8 py-2 sm:py-3 bg-transparent text-sm sm:text-base"
                  onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0.5 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-0 sm:p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-2 h-2 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0.5 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-0 sm:p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-2 h-2 sm:w-6 sm:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-1 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1 h-1 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  )
}
