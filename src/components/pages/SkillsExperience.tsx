import React from "react";

const SkillsExperience: React.FC = () => (
  <main className="page-content">
    <h1>Skills & Experience</h1>
    <h2>Core Skills</h2>
    <ul>
      <li>
        SQL (SQL Server, Oracle, DB2), performance tuning, query optimization
      </li>
      <li>Data Engineering: ETL/ELT, Databricks, Delta Lake/Medallion</li>
      <li>
        Programming: TypeScript/JavaScript, Python (plus basics in Scala/Java/C#
        as applicable)
      </li>
      <li>
        Cloud & DevOps: CI/CD, environment promotion, monitoring,
        governance/RBAC
      </li>
    </ul>

    <h2>Selected Experience</h2>
    <ul>
      <li>
        Led legacy warehouse migrations to lakehouse; built Bronze/Silver/Gold
        pipelines
      </li>
      <li>Implemented data quality frameworks and cost/perf optimizations</li>
      <li>Mentored engineers; contributed to standards and documentation</li>
    </ul>
  </main>
);

export default SkillsExperience;
