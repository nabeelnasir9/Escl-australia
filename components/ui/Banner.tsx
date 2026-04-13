/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';
import { memo } from 'react';
import { BannerProps } from '@/types/banner.types';
import { useBannerAnimation } from '@/hooks/useBannerAnimation';

const Banner = memo<BannerProps>(({
  title,
  subtitle,
  backgroundImage,
  height = 'lg',
  overlay = 'dark',
  overlayOpacity = 0.5,
  textAlignment = 'center',
  className = '',
  priority = false,
  children,
  enableAnimation = true,
  animationDelay = 300
}) => {
  // Animation hook
  const isVisible = useBannerAnimation(enableAnimation ? animationDelay : 0);

  // Height variants for responsive design
  const heightClasses = {
    sm: 'h-64 sm:h-80',
    md: 'h-80 sm:h-96',
    lg: 'h-96 sm:h-[32rem]',
    xl: 'h-[32rem] sm:h-[40rem]',
    full: 'h-screen'
  };

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  // Overlay classes
  const overlayClasses = {
    light: 'bg-white',
    dark: 'bg-[#42568C]',
    none: 'bg-transparent'
  };

  // Animation classes
  const getAnimationClasses = (delay = 0) => {
    if (!enableAnimation) return '';
    
    return `
      transition-all duration-1000 ease-out
      ${isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
      }
    `;
  };

  return (
    <section 
      className={`
        relative w-full overflow-hidden mt-12
        ${heightClasses[height]}
        ${className}
      `}
      aria-label={`${title} banner`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className="object-cover object-center"
          priority={priority}
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Overlay */}
      {overlay !== 'none' && (
        <div 
          className={`
            absolute inset-0 z-10
            ${overlayClasses[overlay]}
          `}
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content Container */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`
            max-w-4xl w-full
            ${alignmentClasses[textAlignment]}
            ${getAnimationClasses()}
          `}
          style={enableAnimation ? { transitionDelay: `${animationDelay}ms` } : {}}
        >
          {/* Default Content */}
          {!children && (
            <div className="space-y-4">
              <h1 className={`
                text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight uppercase
                ${enableAnimation ? `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` : ''}
              `}
              style={enableAnimation ? { transitionDelay: `${animationDelay + 200}ms` } : {}}
              >
                {title}
              </h1>
              {subtitle && (
                <p className={`
                  text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed
                  ${enableAnimation ? `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` : ''}
                `}
                style={enableAnimation ? { transitionDelay: `${animationDelay + 400}ms` } : {}}
                >
                  {subtitle}
                </p>
              )}
            </div>
          )}
          
          {/* Custom Content */}
          {children}
        </div>
      </div>
    </section>
  );
});

Banner.displayName = 'Banner';

export default Banner;