import { AnkerType } from 'global_components/Anker/Anker';

export const handleScrollTo = (id: AnkerType) => {
  const app = document.querySelector('html');
  const anker = document.getElementById(id);

  if (app && anker) app.scrollTop = anker.offsetTop;
};
