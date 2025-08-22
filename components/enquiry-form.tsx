"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    country: "India",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");

    // Reset form
    setFormData({
      product: "",
      name: "",
      email: "",
      phone: "",
      country: "India",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="enquiry" className="flex justify-center py-16 bg-gray-50">
      <div className="w-full max-w-6xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Quick <span className="text-orange-500">Enquiry</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for bulk orders, pricing information, or any
            questions about our agricultural products.
          </p>
        </div>

        <Card className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 mx-auto">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 text-center">
              Contact Information
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Contact Info Block */}
            <div className="flex flex-col sm:flex-row sm:justify-evenly items-center sm:items-start gap-6">
              {/* Address */}
              <div className="flex items-start space-x-3 max-w-xs">
                <MapPin className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Address
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    4th Cross, 2nd main,
                    <br />
                    Shivkumarswamy Layout,
                    <br />
                    Davangere, Karnataka - 577005, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 max-w-xs">
                <Phone className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Phone
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +91 91645 60222
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    +91 91640 56222
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 max-w-xs">
                <Mail className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Email
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Vbfoodsdvg@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-4 border-t text-center">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
                Business Hours
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Monday - Saturday: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  // return (
  //   <section id="enquiry" className="flex justify-center py-16 bg-gray-50">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center mb-8 sm:mb-12">
  //         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
  //           Quick <span className="text-orange-500">Enquiry</span>
  //         </h2>
  //         <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
  //           Get in touch with us for bulk orders, pricing information, or any
  //           questions about our agricultural products.
  //         </p>

  //         <Card className="w-3/4 h-full">
  //           <CardHeader>
  //             <CardTitle className="text-lg sm:text-xl font-bold text-gray-800">
  //               Contact Information
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent className="space-y-4 sm:space-y-6">
  //             <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-12">
  //               {/* Address */}
  //               <div className="flex items-start space-x-3 max-w-xs">
  //                 <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
  //                     Address
  //                   </h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     Ground Floor, No.152, 3rd Block,
  //                     <br />
  //                     80 Feet Road, HBR Layout,
  //                     <br />
  //                     Bangalore, Karnataka - 560043, India
  //                   </p>
  //                 </div>
  //               </div>

  //               {/* Phone */}
  //               <div className="flex items-start space-x-3 max-w-xs">
  //                 <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
  //                     Phone
  //                   </h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     +91 98765 43210
  //                   </p>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     +91 87654 32109
  //                   </p>
  //                 </div>
  //               </div>

  //               {/* Email */}
  //               <div className="flex items-start space-x-3 max-w-xs">
  //                 <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
  //                     Email
  //                   </h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     info@vbfoods.com
  //                   </p>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     sales@vbfoods.com
  //                   </p>
  //                 </div>
  //               </div>
  //             </div>

  //             <div className="pt-4 border-t">
  //               <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">
  //                 Business Hours
  //               </h4>
  //               <p className="text-gray-600 text-xs sm:text-sm">
  //                 Monday - Saturday: 9:00 AM - 6:00 PM
  //                 <br />
  //                 Sunday: Closed
  //               </p>
  //             </div>
  //           </CardContent>
  //         </Card>
  //       </div>

  //       {/* <div className="grid lg:grid-cols-3 gap-6 sm:gap-8"> */}
  //       {/* Contact Information */}
  //       {/* <div className="lg:col-span-1 order-2 lg:order-1">
  //           <Card className="h-full">
  //             <CardHeader>
  //               <CardTitle className="text-lg sm:text-xl font-bold text-gray-800">Contact Information</CardTitle>
  //             </CardHeader>
  //             <CardContent className="space-y-4 sm:space-y-6">
  //               <div className="flex items-start space-x-3">
  //                 <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Address</h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">
  //                     Ground Floor, No.152, 3rd Block,
  //                     <br />
  //                     80 Feet Road, HBR Layout,
  //                     <br />
  //                     Bangalore, Karnataka - 560043, India
  //                   </p>
  //                 </div>
  //               </div>

  //               <div className="flex items-start space-x-3">
  //                 <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Phone</h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">+91 98765 43210</p>
  //                   <p className="text-gray-600 text-xs sm:text-sm">+91 87654 32109</p>
  //                 </div>
  //               </div>

  //               <div className="flex items-start space-x-3">
  //                 <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1" />
  //                 <div>
  //                   <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
  //                   <p className="text-gray-600 text-xs sm:text-sm">info@vbfoods.com</p>
  //                   <p className="text-gray-600 text-xs sm:text-sm">sales@vbfoods.com</p>
  //                 </div>
  //               </div>

  //               <div className="pt-4 border-t">
  //                 <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Business Hours</h4>
  //                 <p className="text-gray-600 text-xs sm:text-sm">
  //                   Monday - Saturday: 9:00 AM - 6:00 PM
  //                   <br />
  //                   Sunday: Closed
  //                 </p>
  //               </div>
  //             </CardContent>
  //           </Card>
  //         </div> */}

  //       {/* Enquiry Form */}
  //       {/* <div className="lg:col-span-2 order-1 lg:order-2">
  //           <Card>
  //             <CardHeader>
  //               <CardTitle className="text-lg sm:text-xl font-bold text-gray-800">Send us a Message</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
  //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
  //                   <div>
  //                     <Select
  //                       value={formData.product}
  //                       onValueChange={(value) => handleInputChange("product", value)}
  //                       required
  //                     >
  //                       <SelectTrigger id="product-input" className="text-sm sm:text-base">
  //                         <SelectValue placeholder="Product / Service Looking for" />
  //                       </SelectTrigger>
  //                       <SelectContent>
  //                         <SelectItem value="Popcorn Maize">Popcorn Maize</SelectItem>
  //                         <SelectItem value="Chana (Chickpeas)">Chana (Chickpeas)</SelectItem>
  //                         <SelectItem value="Chia Seeds">Chia Seeds</SelectItem>
  //                         <SelectItem value="Premium Rice">Premium Rice</SelectItem>
  //                         <SelectItem value="Finger Millet (Ragi)">Finger Millet (Ragi)</SelectItem>
  //                         <SelectItem value="Bulk Order - Multiple Products">Bulk Order - Multiple Products</SelectItem>
  //                         <SelectItem value="Custom Requirements">Custom Requirements</SelectItem>
  //                         <SelectItem value="General Inquiry">General Inquiry</SelectItem>
  //                       </SelectContent>
  //                     </Select>
  //                   </div>
  //                   <div>
  //                     <Input
  //                       placeholder="Your Name"
  //                       value={formData.name}
  //                       onChange={(e) => handleInputChange("name", e.target.value)}
  //                       required
  //                       className="text-sm sm:text-base"
  //                     />
  //                   </div>
  //                 </div>

  //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
  //                   <div>
  //                     <Input
  //                       type="email"
  //                       placeholder="Email"
  //                       value={formData.email}
  //                       onChange={(e) => handleInputChange("email", e.target.value)}
  //                       required
  //                       className="text-sm sm:text-base"
  //                     />
  //                   </div>
  //                   <div>
  //                     <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
  //                       <SelectTrigger className="text-sm sm:text-base">
  //                         <SelectValue placeholder="Select Country" />
  //                       </SelectTrigger>
  //                       <SelectContent>
  //                         <SelectItem value="India">India</SelectItem>
  //                         <SelectItem value="USA">USA</SelectItem>
  //                         <SelectItem value="UK">UK</SelectItem>
  //                         <SelectItem value="Canada">Canada</SelectItem>
  //                         <SelectItem value="Australia">Australia</SelectItem>
  //                         <SelectItem value="Other">Other</SelectItem>
  //                       </SelectContent>
  //                     </Select>
  //                   </div>
  //                 </div>

  //                 <div className="flex gap-3 sm:gap-4">
  //                   <div className="w-16 sm:w-20">
  //                     <Input placeholder="+91" value="+91" readOnly className="text-sm sm:text-base" />
  //                   </div>
  //                   <div className="flex-1">
  //                     <Input
  //                       placeholder="Phone / Mobile"
  //                       value={formData.phone}
  //                       onChange={(e) => handleInputChange("phone", e.target.value)}
  //                       required
  //                       className="text-sm sm:text-base"
  //                     />
  //                   </div>
  //                 </div>

  //                 <div>
  //                   <Textarea
  //                     placeholder="Leave a Message for us"
  //                     rows={4}
  //                     value={formData.message}
  //                     onChange={(e) => handleInputChange("message", e.target.value)}
  //                     required
  //                     className="text-sm sm:text-base"
  //                   />
  //                 </div>

  //                 <div className="text-center">
  //                   <Button
  //                     type="submit"
  //                     size="lg"
  //                     className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
  //                   >
  //                     Send Message
  //                   </Button>
  //                 </div>
  //               </form>
  //             </CardContent>
  //           </Card>
  //         </div> */}
  //       {/* </div> */}
  //     </div>
  //   </section>
  // );
}
