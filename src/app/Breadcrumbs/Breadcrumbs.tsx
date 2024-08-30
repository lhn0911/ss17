import React from "react";

interface BreadcrumbProps {
  breadcrumbs: { label: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="breadcrumb-item">
            <a href={crumb.href}>{crumb.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
