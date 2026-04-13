import type { Metadata } from 'next';
import AboutUsContent from '../components/AboutUsContent';

export const metadata: Metadata = {
  title: 'Our Mission & Values - Meta Talent',
  description: 'Our mission is to connect people and businesses through reliable, ethical, and responsive staffing solutions. Learn about our core values.',
  keywords: ['mission', 'values', 'integrity', 'excellence', 'reliability', 'collaboration'],
};

export default function MissionPage() {
  return <AboutUsContent scrollTarget="mission" />;
}