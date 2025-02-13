"use client"; // Add this directive at the top of the file

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sections = {
  home: "Home",
  dashboard: "Dashboard",
  expenseTracking: "Expense Tracking",
  savingGoal: "Saving Goal",
  financialManagement: "Financial Management",
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState(sections.home);

  return (
    <div className="min-h-screen bg-sky-500 text-gray-900">
      <header className="flex justify-between items-center p-6 bg-white shadow-lg">
        <Image src="/Bud-App.png" alt="Bud-App logo" width={100} height={50} priority />
        <nav className="flex gap-4">
          {Object.entries(sections).map(([key, value]) => (
            <button
              key={key}
              className={`p-2 rounded ${
                currentSection === value ? "bg-gray-300" : "bg-gray-100"
              } hover:bg-gray-200 transition`}
              onClick={() => setCurrentSection(value)}
            >
              {value}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bud-App!</h1>
        <p className="text-lg mb-8">Budget Smarter, Live Better.</p>
        <Image src="/Happy-Free.PNG" alt="Happy Image" width={600} height={400} className="rounded-lg shadow-lg mb-8" />
        <div className="w-full max-w-4xl">
          <SectionContent section={currentSection} />
        </div>
      </main>

      <footer className="flex justify-center items-center p-6 bg-white shadow-lg">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Terms of Service
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          About Us →
        </a>
      </footer>
    </div>
  );
}

function SectionContent({ section }) {
  switch (section) {
    case sections.home:
      return <HomeSection />;
    case sections.dashboard:
      return <DashboardSection />;
    case sections.expenseTracking:
      return <ExpenseTrackingSection />;
    case sections.savingGoal:
      return <SavingGoalSection />;
    case sections.financialManagement:
      return <FinancialManagementSection />;
    default:
      return null;
  }
}

function HomeSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Take Control of Your Finances!</h2>
      <p>Decide on Budget, Save More Money, Achieve Financial Goals</p>
    </div>
  );
}

function DashboardSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>This is the dashboard section where you can view your financial summary.</p>
    </div>
  );
}

function ExpenseTrackingSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Expense Tracking</h2>
      <p>This is the expense tracking section where you can manage your expenses.</p>
    </div>
  );
}

function SavingGoalSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Saving Goal</h2>
      <p>This is the saving goal section where you can set and track your saving goals.</p>
    </div>
  );
}

function FinancialManagementSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Financial Management</h2>
      <p>This is the financial management section where you can manage your finances.</p>
    </div>
  );
}