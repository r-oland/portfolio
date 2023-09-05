// Components==============
import { ProjectType } from 'database/work';
import { useMediaQ } from 'hooks/useMediaQ';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';
// =========================

export default function ImageRender({
  project,
  left,
  inView,
}: {
  project: ProjectType;
  left: boolean;
  inView: boolean;
}) {
  const query = useMediaQ('min', 1024);

  if (query) return <Desktop project={project} left={left} inView={inView} />;

  return <Mobile project={project} inView={inView} />;
}
