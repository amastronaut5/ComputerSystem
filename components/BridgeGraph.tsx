// A placeholder for the interactive graph, can be replaced by VisX, Cytoscape.js, or a custom D3 component.
import { useEffect, useRef } from 'react';

const NODES = [
  { id: 'CA', label: 'Computer Architecture', color: 'red' },
  { id: 'SP', label: 'System Programming', color: 'orange' },
  { id: 'OS', label: 'Operating System', color: 'yellow' },
  { id: 'DSA', label: 'Data Structures & Algorithms', color: 'green' },
  { id: 'DS', label: 'Discrete Structures', color: 'cyan' },
  { id: 'CN', label: 'Networks', color: 'blue' },
  { id: 'BRIDGE', label: 'Interlinking Bridge', color: 'purple' },
];
const EDGES = [
  { from: 'CA', to: 'SP' },
  { from: 'SP', to: 'OS' },
  { from: 'OS', to: 'DSA' },
  { from: 'DSA', to: 'CN' },
  { from: 'DS', to: 'CA' },
  { from: 'DS', to: 'SP' },
  { from: 'DS', to: 'OS' },
  { from: 'DS', to: 'DSA' },
  { from: 'DS', to: 'CN' },
  { from: 'CA', to: 'BRIDGE' },
  { from: 'SP', to: 'BRIDGE' },
  { from: 'OS', to: 'BRIDGE' },
  { from: 'DSA', to: 'BRIDGE' },
  { from: 'DS', to: 'BRIDGE' },
  { from: 'CN', to: 'BRIDGE' },
];

export default function BridgeGraph() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Placeholder for drawing the graph. You can use Cytoscape.js or VisX for a real implementation.
    if (ref.current) {
      ref.current.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 700 400">
          ${EDGES.map(({ from, to }) => {
            const f = NODES.find(n => n.id === from);
            const t = NODES.find(n => n.id === to);
            if (!f || !t) return '';
            // Placeholder positions, for demo only
            const pos = {
              CA: [100, 200], SP: [230, 100], OS: [360, 100], DSA: [490, 200], DS: [230, 300], CN: [490, 300], BRIDGE: [350, 200]
            };
            const [x1, y1] = pos[from], [x2, y2] = pos[to];
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#888" stroke-width="2"/>`;
          }).join('')}
          ${NODES.map(({ id, label, color }) => {
            const pos = {
              CA: [100, 200], SP: [230, 100], OS: [360, 100], DSA: [490, 200], DS: [230, 300], CN: [490, 300], BRIDGE: [350, 200]
            };
            const [x, y] = pos[id];
            return `<a href="/playlists#${id}" tabindex="0">
              <circle cx="${x}" cy="${y}" r="38" fill="${color}" opacity="0.8"/>
              <text x="${x}" y="${y+5}" text-anchor="middle" font-size="17" fill="white" font-weight="bold">${label.replace(/ & /g, ' &amp; ')}</text>
            </a>`;
          }).join('')}
        </svg>
      `;
    }
  }, []);
  return (
    <div ref={ref} className="w-full h-full" tabIndex={0} aria-label="System Bridge Graph" />
  );
}