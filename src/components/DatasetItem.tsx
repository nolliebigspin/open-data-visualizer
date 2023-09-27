"use client";

import { DatasetCategory } from "@/types";
import { useEffect, useState } from "react";
import { FaCar, FaHospital, FaInfoCircle } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { MdEuro, MdGroups } from "react-icons/md";

type DatasetItemProps = {
  title: string;
  description: string;
  category: DatasetCategory;
  createdAt?: Date;
};

const DatasetItem = ({
  title,
  description,
  category,
  createdAt,
}: DatasetItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  const maxTitleLength = 40;
  const maxDescriptionLength = 150;

  const iconMap = {
    [DatasetCategory.TRAFFIC]: FaCar,
    [DatasetCategory.HEALTH]: FaHospital,
    [DatasetCategory.ENERGY]: BsLightningFill,
    [DatasetCategory.FINANCE]: MdEuro,
    [DatasetCategory.SOCIETY]: MdGroups,
  };

  const IconComponent = iconMap[category] || FaInfoCircle;

  return (
    <div
      className="relative flex h-72 items-center justify-center rounded-lg border-2 border-text bg-background p-6 text-text shadow-lg hover:bg-text hover:text-background"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent
        size="80%"
        className={`absolute z-20 ${
          isHovered ? "text-accent" : "text-primary"
        }`}
      />
      <div className="flex h-full flex-col gap-2 text-center">
        <div className="z-30 h-1/3 text-h5 font-bold">
          {title.length > maxTitleLength
            ? `${title.substring(0, maxTitleLength)}...`
            : title}
        </div>
        <div className="z-30 h-2/3 text-left">
          {description.length > maxDescriptionLength
            ? `${description.substring(0, maxDescriptionLength)}...`
            : description}
        </div>
        <div className="z-30 flex gap-2 self-end">
          Veröffentlicht am:
          <strong>
            {createdAt
              ? createdAt.toLocaleDateString("de", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "unbekannt"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default DatasetItem;
