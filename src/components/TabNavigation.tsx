"use client";

import { Tab } from "@headlessui/react";

type TabNavigationProps = {
  tabs: Tab[];
};

type Tab = {
  title: string;
  content: React.ReactElement;
};

const TabNavigation = ({ tabs }: TabNavigationProps) => {
  return (
    <Tab.Group>
      <Tab.List className="mb-8 flex justify-center gap-4">
        {tabs.map((tab, index) => (
          <Tab key={index}>
            {({ selected }) => (
              <div
                className={`rounded-lg px-4 py-2 shadow-lg hover:underline ${
                  selected ? "bg-text text-background" : "bg-primary text-text"
                }`}
              >
                {tab.title}
              </div>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab, index) => (
          <div key={index}>
            <Tab.Panel>{tab.content}</Tab.Panel>
          </div>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabNavigation;
