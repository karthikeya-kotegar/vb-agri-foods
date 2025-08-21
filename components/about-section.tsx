import { Leaf, Users, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Direct Farm Sourcing",
    description: "We work directly with farmers across Karnataka, ensuring fair prices and quality products.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "B2B Expertise",
    description: "Specialized in bulk supply to food processors, wholesalers, exporters, and retail chains.",
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure consistent, high-grade agricultural products.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: "Export Ready",
    description: "Products processed and packed to meet both domestic and international standards.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Welcome to <span className="text-green-600">VB Foods</span>
            </h2>

            <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 mb-6 sm:mb-8">
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                <strong>VB Foods</strong> is a leading B2B agricultural products trading firm, dedicated to bridging the
                gap between Indian farmers and institutional buyers nationwide. We specialize in the sourcing,
                processing, and bulk supply of high-quality agricultural outputs, with a strong emphasis on grains,
                pulses, and millets—crops for which Karnataka is renowned as a major producing region.
              </p>

              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                We work closely with farmers across Karnataka, ensuring fair procurement practices and providing them
                with reliable market access. Our sourcing network enables us to aggregate a consistent supply of major
                crops directly from the field, supporting local agricultural communities and ensuring traceability.
              </p>

              <p className="text-sm sm:text-base">
                We cater to a diverse clientele, including food processors, wholesalers, exporters, and large retail
                chains, delivering bulk quantities efficiently, whether for domestic consumption or export.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Partner Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">B2B Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Agricultural farming in Karnataka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-green-600 text-white p-3 sm:p-6 rounded-xl shadow-lg">
              <div className="text-lg sm:text-2xl font-bold">VB Foods</div>
              <div className="text-sm sm:text-lg">Premium Agri Trading</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-4 sm:pt-6">
                <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Categories */}
        <div className="mt-12 sm:mt-16 bg-green-50 rounded-2xl p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
            Our Product Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🌾</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Grains</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Rice, wheat, maize, and other cereals sourced from Karnataka's fertile regions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🫘</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Pulses</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                A variety of lentils, chickpeas, and beans, processed and packed as per buyer requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🌱</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Millets</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Including ragi, jowar, and bajra, staple crops gaining popularity for their nutritional benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
