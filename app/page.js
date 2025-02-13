import React from "react";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import HeroSection from "@/components/hero";
import StatsSection from '../components/StatsSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection statsData={statsData} />

      {/* Features Section */}
      <FeaturesSection featuresData={featuresData} />

      {/* How It Works Section */}
      <HowItWorksSection howItWorksData={howItWorksData} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonialsData={testimonialsData} />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
};

export default LandingPage;
