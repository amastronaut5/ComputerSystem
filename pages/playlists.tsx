import MaterialSection from "@/components/MaterialSection";

const sections = [
  {
    id: "CA",
    title: "Computer Architecture",
    description: "CPU, Memory, Instruction Cycle, Binary & Assembly",
    playlist: [
      { title: "Nand2Tetris Part I", url: "https://www.coursera.org/learn/build-a-computer" },
      { title: "Computer Architecture by David Black-Schaffer", url: "https://www.youtube.com/playlist?list=PLgnQpQtFTOGR50iIOtO36nK6aYlF1sG6a" },
      { title: "But How Do It Know? (Book)", url: "https://www.amazon.com/But-How-Know-Computer-Works/dp/0615303765" },
      { title: "Operating Systems: Three Easy Pieces (Ch1-3)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" }
    ],
    references: [
      { title: "MIT 6.004", url: "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/" },
      { title: "Computer Systems: A Programmer's Perspective", url: "https://csapp.cs.cmu.edu/" },
    ]
  },
  {
    id: "SP",
    title: "System Programming",
    description: "Assemblers, Linkers, Compilers, Shell, Hardware-OS Interface",
    playlist: [
      { title: "CMU: Introduction to Computer Systems", url: "https://www.youtube.com/playlist?list=PLm3J0oaFux3YL5qLskC6xQ24JpMwOAeJz" },
      { title: "Linkers and Loaders (Book)", url: "https://www.iecc.com/linker/" },
      { title: "Linux Shell Scripting Tutorial", url: "https://www.youtube.com/playlist?list=PLS1QulWo1RIaUGP446_pWLgTZPiFizEMq" }
    ],
    references: [
      { title: "CS:APP Ch7 (Linking)", url: "https://csapp.cs.cmu.edu/" },
      { title: "Writing a Simple Shell", url: "https://brennan.io/2015/01/16/write-a-shell-in-c/" }
    ]
  },
  {
    id: "OS",
    title: "Operating Systems",
    description: "Processes, Memory, Filesystems, Interrupts, Synchronization",
    playlist: [
      { title: "OSTEP: Three Easy Pieces (Full)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
      { title: "MIT 6.S081 Operating Systems", url: "https://www.youtube.com/playlist?list=PLQrcZVt5qXYW4gH2RkKou7nQfJJFS2A2T" },
      { title: "Operating System Concepts (Silberschatz)", url: "https://codex.cs.yale.edu/avi/os-book/OS9/" }
    ],
    references: [
      { title: "Xv6 Book", url: "https://pdos.csail.mit.edu/6.828/2018/xv6/book-rev0.pdf" },
      { title: "OSDev Wiki", url: "https://wiki.osdev.org/Main_Page" }
    ]
  },
  {
    id: "CN",
    title: "Data Communication / Computer Networks",
    description: "OSI, TCP/IP, Protocols, Routing, Security",
    playlist: [
      { title: "Computer Networking: Top-Down Approach", url: "https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm" },
      { title: "Stanford CS144: Computer Networking", url: "https://www.youtube.com/playlist?list=PLoCMsyE1cvdW6PXh6L5dMa0LFcb6zLx3-" },
      { title: "Networking Fundamentals (Microsoft)", url: "https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN" }
    ],
    references: [
      { title: "Beej's Guide to Network Programming", url: "https://beej.us/guide/bgnet/" },
      { title: "RFC 2616 (HTTP)", url: "https://datatracker.ietf.org/doc/html/rfc2616" }
    ]
  },
  {
    id: "DS",
    title: "Discrete Structures",
    description: "Logic, Sets, Graphs, Automata, Proofs",
    playlist: [
      { title: "Discrete Mathematics (MIT 6.042J)", url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/" },
      { title: "Automata Theory (Shai Simonson)", url: "https://www.youtube.com/playlist?list=PL5D317A3898B9D1B6" },
      { title: "Graph Theory (William F. Trench)", url: "https://www.youtube.com/playlist?list=PLiQ2Fj2U4p8AMcZ6rEVu8OgF8PjT9C9qC" }
    ],
    references: [
      { title: "Discrete Mathematics and Its Applications", url: "https://www.mheducation.com/highered/product/discrete-mathematics-its-applications-rosen/M9781259676512.html" },
      { title: "Introduction to Algorithms (CLRS)", url: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/" }
    ]
  },
  {
    id: "DSA",
    title: "Data Structures & Algorithms",
    description: "Arrays, Trees, Recursion, Complexity",
    playlist: [
      { title: "Princeton Algorithms, Part I & II", url: "https://www.coursera.org/specializations/algorithms" },
      { title: "Abdul Bari: Data Structures & Algorithms", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwLLTJfBpTgqcFQw5Vbbiu2T" },
      { title: "MIT 6.006/6.046 (DSA)", url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/" }
    ],
    references: [
      { title: "LeetCode", url: "https://leetcode.com/" },
      { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-structures/" }
    ]
  }
];

export default function Playlists() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Curated Playlists & References</h1>
      <p className="mb-8 text-lg text-gray-700">Jump into the most impactful learning materials for each core area. Save your progress, or start at any node.</p>
      <div className="flex flex-col gap-12">
        {sections.map(sec => (
          <MaterialSection key={sec.id} section={sec} />
        ))}
      </div>
    </div>
  );
}