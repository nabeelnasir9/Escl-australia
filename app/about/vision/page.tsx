import type { Metadata } from 'next';
import AboutUsContent from '../components/AboutUsContent';

export const metadata: Metadata = {
  title: 'Our Vision & Expertise - Elite Global Service Company',
  description: 'Our vision is to become Australia\'s leading labour hire company. Learn about our background, expertise, and industry experience.',
  keywords: ['vision', 'expertise', 'industry experience', 'Australia', 'Saudi Arabia', 'leading labour hire'],
};

export default function VisionPage() {
  return <AboutUsContent scrollTarget="mission" />;
}