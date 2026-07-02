import useInView from '../hooks/useInView';

export default function DimensionDivider({ label }) {
  const [ref, inView] = useInView(0.5);
  return (
    <div className="dim-divider" ref={ref}>
      <span className="dim-tick" />
      <span className={`dim-line ${inView ? 'draw' : ''}`} />
      {label && <span className="dim-label">{label}</span>}
      <span className={`dim-line ${inView ? 'draw' : ''}`} />
      <span className="dim-tick" />
    </div>
  );
}
