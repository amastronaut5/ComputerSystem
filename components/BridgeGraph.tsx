import React from "react";

// Type for node keys
type NodeKey = "CA" | "SP" | "OS" | "DSA" | "DS" | "CN" | "BRIDGE";

// Nodes and their positions
const NODES = [
  { id: "CA", label: "Computer Architecture", color: "#FF6384" },
  { id: "SP", label: "Systems Programming", color: "#36A2EB" },
  { id: "OS", label: "Operating Systems", color: "#FFCE56" },
  { id: "DSA", label: "Data Structures & Algorithms", color: "#4BC0C0" },
  { id: "DS", label: "Distributed Systems", color: "#9966FF" },
  { id: "CN", label: "Computer Networks", color: "#FF9F40" },
  { id: "BRIDGE", label: "Bridge", color: "#E7E9ED" },
] as const;

const EDGES: [NodeKey, NodeKey][] = [
  ["CA", "SP"],
  ["SP", "OS"],
  ["OS", "DSA"],
  ["DSA", "DS"],
  ["DS", "CN"],
  ["CN", "BRIDGE"],
  ["BRIDGE", "CA"],
];

// Node positions on the SVG canvas
const POS: Record<NodeKey, [number, number]> = {
  CA: [100, 200],
  SP: [230, 100],
  OS: [360, 100],
  DSA: [490, 200],
  DS: [230, 300],
  CN: [490, 300],
  BRIDGE: [350, 200],
};

export default function BridgeGraph() {
  return (
    <svg width={600} height={400} style={{ background: "#fafafa", borderRadius: 10 }}>
      {/* Draw edges */}
      {EDGES.map(([from, to], i) => {
        const [x1, y1] = POS[from];
        const [x2, y2] = POS[to];
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#888"
            strokeWidth={2}
          />
        );
      })}
      {/* Draw nodes */}
      {NODES.map(({ id, label, color }) => {
        const [x, y] = POS[id];
        return (
          <g key={id}>
            <circle cx={x} cy={y} r={28} fill={color} stroke="#222" strokeWidth={2} />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize={12}
              fill="#222"
              style={{ pointerEvents: "none", fontWeight: 600 }}
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
