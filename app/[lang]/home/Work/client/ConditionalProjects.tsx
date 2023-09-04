'use client';

// Components==============
import React, { useContext } from 'react';
import { projects } from 'database/work';
import { LangContext } from 'app/[lang]/layout/ClientWrapper';
import { LimitWorkContext } from './LimitWorkContext';
import Project from '../Project/Project';
// =========================

export default function ConditionalProjects() {
  const { limit } = useContext(LimitWorkContext);
  const { lang } = useContext(LangContext);

  if (limit) return null;

  return (
    projects
      // Show hidden projects
      .filter((p, i) => i > 2)
      .map((p, i) => {
        const left = i % 2 !== 0;
        return <Project key={i} project={p} left={left} lang={lang} />;
      })
  );
}
