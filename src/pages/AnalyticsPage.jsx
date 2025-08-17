import React from "react";
import Header from "../_components/common/Header";
import OverviewsCards from "../_components/analytics/OverviewsCards";
import RevenueChart from "../_components/analytics/RevenueChart";
import ChannelPerformance from "../_components/analytics/ChannelPerformance";
import ProductPerformance from "../_components/analytics/ProductPerformance";
import UserRetention from "../_components/analytics/UserRetention";
import CustomerSegmentation from "../_components/analytics/CustomerSegmentation";
import AIPoweredInsights from "../_components/analytics/AIPoweredInsights";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={"Analytics"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewsCards />
        <RevenueChart />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetention />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  );
};

export default AnalyticsPage;
