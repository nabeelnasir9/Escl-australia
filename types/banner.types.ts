export interface BannerProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    height?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    overlay?: 'light' | 'dark' | 'none';
    overlayOpacity?: number;
    textAlignment?: 'left' | 'center' | 'right';
    className?: string;
    priority?: boolean; // For Next.js Image priority loading
    children?: React.ReactNode; // For custom content
    enableAnimation?: boolean; // Enable entrance animations
    animationDelay?: number; // Animation delay in ms
  }