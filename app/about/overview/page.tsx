import type { Metadata } from 'next';
import AboutUsContent from '../components/AboutUsContent';

export const metadata: Metadata = {
  title: 'Company Overview - Elite Global Service Company',
  description: 'Elite Global Service Company is your trusted partner in connecting skilled professionals with businesses across Australia, specializing in workforce solutions.',
  keywords: ['company overview', 'workforce partner', 'staffing solutions', 'Australia'],
};

export default function OverviewPage() {
  return <AboutUsContent scrollTarget="overview" />;
}