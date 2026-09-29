import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DashboardContent from '@/components/DashboardContent';

export default function AdminPage() {
  return (
    <DashboardLayout role="admin">
      <DashboardContent title="Admin Overview" />
    </DashboardLayout>
  );
}
