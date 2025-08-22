"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Popcorn Maize",
    category: "Grains",
    // price: "₹45-55 per kg",
    image: "/popcorn.avif",
    shortDescription:
      "Premium quality popcorn maize sourced from Karnataka's best farms.",
    fullDescription:
      "Our popcorn maize is carefully selected from the finest farms in Karnataka. Known for its excellent popping quality and rich flavor, this maize is perfect for both commercial and domestic use. The kernels are uniform in size and have a high expansion ratio, making them ideal for producing fluffy, delicious popcorn. We ensure proper drying and storage to maintain the quality and freshness of the product.",
    features: [
      "High expansion ratio",
      "Uniform kernel size",
      "Rich flavor",
      "Properly dried and stored",
    ],
  },
  {
    id: 2,
    name: "Chana (Chickpeas)",
    category: "Pulses",
    // price: "₹80-95 per kg",
    image: "/chana.avif",
    shortDescription:
      "Nutritious chickpeas rich in protein and fiber, perfect for various culinary uses.",
    fullDescription:
      "Our premium chana (chickpeas) are sourced directly from trusted farmers across Karnataka. These protein-rich legumes are carefully cleaned, sorted, and packed to ensure maximum nutritional value. Chana is an excellent source of plant-based protein, fiber, and essential minerals. They are versatile and can be used in various preparations including curries, snacks, and flour production.",
    features: [
      "High protein content",
      "Rich in fiber",
      "Carefully cleaned and sorted",
      "Versatile culinary uses",
    ],
  },
  {
    id: 3,
    name: "Chia Seeds",
    category: "Seeds",
    // price: "₹450-550 per kg",
    image: "/chia.avif",
    shortDescription:
      "Superfood chia seeds packed with omega-3 fatty acids and antioxidants.",
    fullDescription:
      "Premium quality chia seeds that are considered a superfood due to their exceptional nutritional profile. These tiny seeds are packed with omega-3 fatty acids, fiber, protein, and various micronutrients. Our chia seeds are carefully sourced and processed to maintain their nutritional integrity. They can be easily incorporated into smoothies, yogurt, baked goods, or consumed as a gel by soaking in water.",
    features: [
      "Rich in omega-3 fatty acids",
      "High fiber content",
      "Complete protein source",
      "Antioxidant properties",
    ],
  },
  {
    id: 4,
    name: "Premium Rice",
    category: "Grains",
    // price: "₹35-50 per kg",
    image: "/rice.avif",
    shortDescription:
      "High-quality rice varieties including basmati and traditional Karnataka rice.",
    fullDescription:
      "Our premium rice collection includes various high-quality varieties sourced from the fertile regions of Karnataka. We offer both aromatic basmati rice and traditional local varieties that are known for their excellent taste, texture, and nutritional value. Each grain is carefully selected, cleaned, and processed to ensure consistent quality. Our rice is free from impurities and maintains its natural aroma and flavor.",
    features: [
      "Multiple varieties available",
      "Aromatic and flavorful",
      "Carefully processed",
      "Free from impurities",
    ],
  },
  {
    id: 5,
    name: "Finger Millet (Ragi)",
    category: "Millets",
    // price: "₹60-75 per kg",
    image: "/ragi.jpg",
    shortDescription:
      "Nutritious finger millet (ragi) - a traditional superfood from Karnataka.",
    fullDescription:
      "Finger millet, locally known as ragi, is one of Karnataka's most nutritious traditional grains. This ancient superfood is rich in calcium, iron, and essential amino acids. Our ragi is sourced from organic farms and processed using traditional methods to preserve its nutritional value. It's gluten-free and has a low glycemic index, making it suitable for diabetics and health-conscious consumers. Ragi can be used to make porridge, rotis, and various traditional preparations.",
    features: [
      "Rich in calcium and iron",
      "Gluten-free",
      "Low glycemic index",
      "Traditional processing methods",
    ],
  },
];

export default function ProductsSection() {
  const [expandedProducts, setExpandedProducts] = useState<number[]>([]);
  const [enquiryProduct, setEnquiryProduct] = useState<string>("");

  const toggleExpanded = (productId: number) => {
    setExpandedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleEnquiry = (productName: string) => {
    setEnquiryProduct(productName);
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
    // Pre-fill the enquiry form
    setTimeout(() => {
      const productInput = document.getElementById(
        "product-input"
      ) as HTMLInputElement;
      if (productInput) {
        productInput.value = `Enquiry for ${productName}`;
      }
    }, 500);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our <span className="text-orange-500">Premium Products</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We specialize in sourcing and supplying high-quality agricultural
            products directly from Karnataka's fertile regions. Our products are
            carefully selected, processed, and packed to ensure maximum quality
            and freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => {
            const isExpanded = expandedProducts.includes(product.id);

            return (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                    <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-800">
                    {product.name}
                  </CardTitle>
                  {/* <p className="text-base sm:text-lg font-semibold text-green-600">
                    {product.price}
                  </p> */}
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {isExpanded
                      ? product.fullDescription
                      : product.shortDescription}
                  </p>

                  {isExpanded && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button
                      variant="outline"
                      onClick={() => toggleExpanded(product.id)}
                      className="flex-1 text-xs sm:text-sm"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </Button>
                    <Button
                      onClick={() => handleEnquiry(product.name)}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm"
                    >
                      Enquiry Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
