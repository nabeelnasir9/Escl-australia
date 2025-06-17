import type { Metadata } from 'next';
import AboutUsContent from './components/AboutUsContent';

export const metadata: Metadata = {
  title: 'About Us - Elite Global Service Company',
  description: 'Learn about Elite Global Service Company, your trusted partner in connecting skilled professionals with businesses across Australia.',
  keywords: ['staffing solutions', 'workforce management', 'Australia', 'recruitment', 'labour hire'],
};

export default function AboutPage() {
  return <AboutUsContent />;
}