import React from "react";
import Image from "next/image";

const Showcase = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white dark:bg-black">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-md bg-gray-50 dark:bg-zinc-900 dark:text-white"
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: "/icons/analytics.svg",
    title: "Live Fleet Analytics",
    description:
      "Get real-time tracking and performance metrics for your entire fleet.",
  },
  {
    icon: "/icons/schedule.svg",
    title: "Smart Scheduling",
    description:
      "Automate dispatching with optimized routes and delivery timelines.",
  },
  {
    icon: "/icons/maintenance.svg",
    title: "Predictive Maintenance",
    description:
      "Avoid breakdowns with alerts and schedules based on AI-driven insights.",
  },
  {
    icon: "/icons/reporting.svg",
    title: "Comprehensive Reporting",
    description:
      "Download detailed reports on fleet efficiency, cost, and usage.",
  },
];

export default Showcase;

