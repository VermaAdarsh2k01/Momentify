"use client";
import React, { useRef } from 'react';
import ClipRevealWrapper from './ClipRevealWrapper';
import AdvancedClipReveal from './AdvancedClipReveal';

const ClipRevealExamples = () => {
  const advancedRef = useRef(null);

  const handleTriggerAdvanced = () => {
    if (advancedRef.current) {
      advancedRef.current.triggerReveal();
    }
  };

  const handleReverseAdvanced = () => {
    if (advancedRef.current) {
      advancedRef.current.reverseReveal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Clip Reveal Animation Examples</h1>
      
      {/* Grid of examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        
        {/* Basic Center Reveal */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Center Reveal</h3>
          <ClipRevealWrapper
            direction="center"
            duration={1.5}
            delay={0.5}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" 
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />
          </ClipRevealWrapper>
        </div>

        {/* Left Reveal */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Left Reveal</h3>
          <ClipRevealWrapper
            direction="left"
            duration={1.2}
            delay={0.7}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop" 
              alt="Forest path"
              className="w-full h-full object-cover"
            />
          </ClipRevealWrapper>
        </div>

        {/* Circle Reveal */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Circle Reveal</h3>
          <ClipRevealWrapper
            direction="circle"
            duration={2}
            delay={1}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" 
              alt="Ocean waves"
              className="w-full h-full object-cover"
            />
          </ClipRevealWrapper>
        </div>

        {/* Advanced Diamond with Scale */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Diamond + Scale</h3>
          <AdvancedClipReveal
            direction="diamond"
            duration={1.8}
            delay={1.2}
            scale={true}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" 
              alt="Desert sunset"
              className="w-full h-full object-cover"
            />
          </AdvancedClipReveal>
        </div>

        {/* Star Reveal with Rotation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Star + Rotation</h3>
          <AdvancedClipReveal
            direction="star"
            duration={2.5}
            delay={1.5}
            rotation={true}
            opacity={true}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop" 
              alt="City skyline"
              className="w-full h-full object-cover"
            />
          </AdvancedClipReveal>
        </div>

        {/* Custom Controlled Animation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Manual Control</h3>
          <AdvancedClipReveal
            ref={advancedRef}
            direction="hexagon"
            duration={1.5}
            triggerOnMount={false}
            scale={true}
            blur={true}
            className="w-full h-64 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" 
              alt="Tropical beach"
              className="w-full h-full object-cover"
            />
          </AdvancedClipReveal>
          <div className="flex gap-2">
            <button 
              onClick={handleTriggerAdvanced}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Reveal
            </button>
            <button 
              onClick={handleReverseAdvanced}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Hide
            </button>
          </div>
        </div>
      </div>

      {/* Custom Clip Path Example */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Custom Clip Path</h3>
        <AdvancedClipReveal
          customClipPath={{
            initial: "polygon(20% 0%, 80% 0%, 80% 0%, 20% 0%)",
            final: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"
          }}
          duration={2}
          delay={2}
          scale={true}
          className="w-full h-96 rounded-lg overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop" 
            alt="Custom reveal"
            className="w-full h-full object-cover"
          />
        </AdvancedClipReveal>
      </div>

      {/* Text Content Example */}
      <div className="mt-12 space-y-4">
        <h3 className="text-2xl font-semibold">Text Content Reveal</h3>
        <ClipRevealWrapper
          direction="bottom"
          duration={1.5}
          delay={3}
          className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg"
        >
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Amazing Content</h2>
            <p className="text-xl">This wrapper works with any content - images, text, videos, or complex components!</p>
          </div>
        </ClipRevealWrapper>
      </div>
    </div>
  );
};

export default ClipRevealExamples;