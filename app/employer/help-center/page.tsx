import type { Metadata } from 'next';
import { EmployerHelpCenterPage } from '@/pages/employer-help-center';

export const metadata: Metadata = {
  title: 'Yardım Merkezi | Vettingo',
  description: 'Vettingo işveren destek talepleri ve sık sorulan sorular.',
};

export default function EmployerHelpCenterRoute() {
  return <EmployerHelpCenterPage />;
}
