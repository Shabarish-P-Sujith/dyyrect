import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardContent from '@/components/DashboardContent';

export default function CustomerPage() {
  return (
    <DashboardLayout role="customer">
      <DashboardContent title="Customer Overview" />
    </DashboardLayout>
  );
}
