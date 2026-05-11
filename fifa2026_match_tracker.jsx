import { useState, useEffect } from "react";

const matches = [
  // GROUP STAGE
  { id: 1, stage: "Group A", date: "Jun 12 (Thu)", kst: "04:00", home: "Mexico", away: "South Africa", venue: "Azteca, Mexico City" },
  { id: 2, stage: "Group A", date: "Jun 12 (Thu)", kst: "11:00", home: "South Korea 🇰🇷", away: "Czechia", venue: "Akron, Zapopan" },
  { id: 3, stage: "Group B", date: "Jun 13 (Fri)", kst: "04:00", home: "Canada", away: "Bosnia & Herzegovina", venue: "BMO Field, Toronto" },
  { id: 4, stage: "Group D", date: "Jun 13 (Fri)", kst: "10:00", home: "USA", away: "Paraguay", venue: "SoFi, Los Angeles" },
  { id: 5, stage: "Group B", date: "Jun 14 (Sat)", kst: "04:00", home: "Qatar", away: "Switzerland", venue: "Levi's, Santa Clara" },
  { id: 6, stage: "Group C", date: "Jun 14 (Sat)", kst: "07:00", home: "Brazil", away: "Morocco", venue: "MetLife, NY/NJ" },
  { id: 7, stage: "Group C", date: "Jun 14 (Sat)", kst: "10:00", home: "Haiti", away: "Scotland", venue: "Gillette, Boston" },
  { id: 8, stage: "Group D", date: "Jun 15 (Sun)", kst: "01:00", home: "Australia", away: "Türkiye", venue: "BC Place, Vancouver" },
  { id: 9, stage: "Group E", date: "Jun 15 (Sun)", kst: "02:00", home: "Germany", away: "Curaçao", venue: "NRG, Houston" },
  { id: 10, stage: "Group F", date: "Jun 15 (Sun)", kst: "05:00", home: "Netherlands", away: "Japan", venue: "AT&T, Dallas" },
  { id: 11, stage: "Group E", date: "Jun 15 (Sun)", kst: "08:00", home: "Ivory Coast", away: "Ecuador", venue: "Lincoln Financial, Philadelphia" },
  { id: 12, stage: "Group F", date: "Jun 15 (Sun)", kst: "11:00", home: "Sweden", away: "Tunisia", venue: "BBVA, Monterrey" },
  { id: 13, stage: "Group H", date: "Jun 16 (Mon)", kst: "01:00", home: "Spain", away: "Cape Verde", venue: "Mercedes-Benz, Atlanta" },
  { id: 14, stage: "Group G", date: "Jun 16 (Mon)", kst: "04:00", home: "Belgium", away: "Egypt", venue: "Lumen Field, Seattle" },
  { id: 15, stage: "Group H", date: "Jun 16 (Mon)", kst: "07:00", home: "Saudi Arabia", away: "Uruguay", venue: "Hard Rock, Miami" },
  { id: 16, stage: "Group G", date: "Jun 16 (Mon)", kst: "10:00", home: "Iran", away: "New Zealand", venue: "SoFi, Los Angeles" },
  { id: 17, stage: "Group I", date: "Jun 17 (Tue)", kst: "04:00", home: "France", away: "Senegal", venue: "MetLife, NY/NJ" },
  { id: 18, stage: "Group I", date: "Jun 17 (Tue)", kst: "07:00", home: "Iraq", away: "Norway", venue: "Gillette, Boston" },
  { id: 19, stage: "Group J", date: "Jun 17 (Tue)", kst: "10:00", home: "Argentina", away: "Algeria", venue: "Arrowhead, Kansas City" },
  { id: 20, stage: "Group J", date: "Jun 18 (Wed)", kst: "01:00", home: "Austria", away: "Jordan", venue: "Levi's, Santa Clara" },
  { id: 21, stage: "Group K", date: "Jun 18 (Wed)", kst: "02:00", home: "Portugal", away: "DR Congo", venue: "NRG, Houston" },
  { id: 22, stage: "Group L", date: "Jun 18 (Wed)", kst: "05:00", home: "England", away: "Croatia", venue: "AT&T, Dallas" },
  { id: 23, stage: "Group L", date: "Jun 18 (Wed)", kst: "08:00", home: "Ghana", away: "Panama", venue: "BMO Field, Toronto" },
  { id: 24, stage: "Group K", date: "Jun 18 (Wed)", kst: "11:00", home: "Uzbekistan", away: "Colombia", venue: "Azteca, Mexico City" },
  { id: 25, stage: "Group A", date: "Jun 19 (Thu)", kst: "01:00", home: "Czechia", away: "South Africa", venue: "Mercedes-Benz, Atlanta" },
  { id: 26, stage: "Group B", date: "Jun 19 (Thu)", kst: "04:00", home: "Switzerland", away: "Bosnia & Herzegovina", venue: "SoFi, Los Angeles" },
  { id: 27, stage: "Group B", date: "Jun 19 (Thu)", kst: "07:00", home: "Canada", away: "Qatar", venue: "BC Place, Vancouver" },
  { id: 28, stage: "Group A", date: "Jun 19 (Thu)", kst: "10:00", home: "Mexico", away: "South Korea 🇰🇷", venue: "Akron, Zapopan" },
  { id: 29, stage: "Group D", date: "Jun 20 (Fri)", kst: "04:00", home: "USA", away: "Australia", venue: "Lumen Field, Seattle" },
  { id: 30, stage: "Group C", date: "Jun 20 (Fri)", kst: "07:00", home: "Scotland", away: "Morocco", venue: "Gillette, Boston" },
  { id: 31, stage: "Group C", date: "Jun 20 (Fri)", kst: "09:30", home: "Brazil", away: "Haiti", venue: "Lincoln Financial, Philadelphia" },
  { id: 32, stage: "Group D", date: "Jun 20 (Fri)", kst: "12:00", home: "Türkiye", away: "Paraguay", venue: "Levi's, Santa Clara" },
  { id: 33, stage: "Group F", date: "Jun 21 (Sat)", kst: "02:00", home: "Netherlands", away: "Sweden", venue: "NRG, Houston" },
  { id: 34, stage: "Group E", date: "Jun 21 (Sat)", kst: "05:00", home: "Germany", away: "Ivory Coast", venue: "BMO Field, Toronto" },
  { id: 35, stage: "Group E", date: "Jun 21 (Sat)", kst: "09:00", home: "Ecuador", away: "Curaçao", venue: "Arrowhead, Kansas City" },
  { id: 36, stage: "Group F", date: "Jun 22 (Sun)", kst: "01:00", home: "Tunisia", away: "Japan", venue: "BBVA, Monterrey" },
  { id: 37, stage: "Group H", date: "Jun 22 (Sun)", kst: "01:00", home: "Spain", away: "Saudi Arabia", venue: "Mercedes-Benz, Atlanta" },
  { id: 38, stage: "Group G", date: "Jun 22 (Sun)", kst: "04:00", home: "Belgium", away: "Iran", venue: "SoFi, Los Angeles" },
  { id: 39, stage: "Group H", date: "Jun 22 (Sun)", kst: "07:00", home: "Uruguay", away: "Cape Verde", venue: "Hard Rock, Miami" },
  { id: 40, stage: "Group G", date: "Jun 22 (Sun)", kst: "10:00", home: "New Zealand", away: "Egypt", venue: "BC Place, Vancouver" },
  { id: 41, stage: "Group J", date: "Jun 23 (Mon)", kst: "02:00", home: "Argentina", away: "Austria", venue: "AT&T, Dallas" },
  { id: 42, stage: "Group I", date: "Jun 23 (Mon)", kst: "06:00", home: "France", away: "Iraq", venue: "Lincoln Financial, Philadelphia" },
  { id: 43, stage: "Group I", date: "Jun 23 (Mon)", kst: "09:00", home: "Norway", away: "Senegal", venue: "MetLife, NY/NJ" },
  { id: 44, stage: "Group J", date: "Jun 23 (Mon)", kst: "12:00", home: "Jordan", away: "Algeria", venue: "Levi's, Santa Clara" },
  { id: 45, stage: "Group K", date: "Jun 24 (Tue)", kst: "02:00", home: "Portugal", away: "Uzbekistan", venue: "NRG, Houston" },
  { id: 46, stage: "Group L", date: "Jun 24 (Tue)", kst: "05:00", home: "England", away: "Ghana", venue: "Gillette, Boston" },
  { id: 47, stage: "Group L", date: "Jun 24 (Tue)", kst: "08:00", home: "Panama", away: "Croatia", venue: "BMO Field, Toronto" },
  { id: 48, stage: "Group K", date: "Jun 24 (Tue)", kst: "11:00", home: "Colombia", away: "DR Congo", venue: "Akron, Zapopan" },
  { id: 49, stage: "Group B", date: "Jun 25 (Wed)", kst: "04:00", home: "Switzerland", away: "Canada", venue: "BC Place, Vancouver" },
  { id: 50, stage: "Group B", date: "Jun 25 (Wed)", kst: "04:00", home: "Bosnia & Herzegovina", away: "Qatar", venue: "Lumen Field, Seattle" },
  { id: 51, stage: "Group C", date: "Jun 25 (Wed)", kst: "07:00", home: "Scotland", away: "Brazil", venue: "Hard Rock, Miami" },
  { id: 52, stage: "Group C", date: "Jun 25 (Wed)", kst: "07:00", home: "Morocco", away: "Haiti", venue: "Mercedes-Benz, Atlanta" },
  { id: 53, stage: "Group A", date: "Jun 25 (Wed)", kst: "10:00", home: "Czechia", away: "Mexico", venue: "Azteca, Mexico City" },
  { id: 54, stage: "Group A", date: "Jun 25 (Wed)", kst: "10:00", home: "South Africa", away: "South Korea 🇰🇷", venue: "BBVA, Monterrey" },
  { id: 55, stage: "Group E", date: "Jun 26 (Thu)", kst: "05:00", home: "Curaçao", away: "Ivory Coast", venue: "Lincoln Financial, Philadelphia" },
  { id: 56, stage: "Group E", date: "Jun 26 (Thu)", kst: "05:00", home: "Ecuador", away: "Germany", venue: "MetLife, NY/NJ" },
  { id: 57, stage: "Group F", date: "Jun 26 (Thu)", kst: "08:00", home: "Japan", away: "Sweden", venue: "AT&T, Dallas" },
  { id: 58, stage: "Group F", date: "Jun 26 (Thu)", kst: "08:00", home: "Tunisia", away: "Netherlands", venue: "Arrowhead, Kansas City" },
  { id: 59, stage: "Group D", date: "Jun 26 (Thu)", kst: "11:00", home: "Türkiye", away: "USA", venue: "SoFi, Los Angeles" },
  { id: 60, stage: "Group D", date: "Jun 26 (Thu)", kst: "11:00", home: "Paraguay", away: "Australia", venue: "Levi's, Santa Clara" },
  { id: 61, stage: "Group I", date: "Jun 27 (Fri)", kst: "04:00", home: "Norway", away: "France", venue: "Gillette, Boston" },
  { id: 62, stage: "Group I", date: "Jun 27 (Fri)", kst: "04:00", home: "Senegal", away: "Iraq", venue: "BMO Field, Toronto" },
  { id: 63, stage: "Group H", date: "Jun 27 (Fri)", kst: "09:00", home: "Cape Verde", away: "Saudi Arabia", venue: "NRG, Houston" },
  { id: 64, stage: "Group H", date: "Jun 27 (Fri)", kst: "09:00", home: "Uruguay", away: "Spain", venue: "Akron, Zapopan" },
  { id: 65, stage: "Group G", date: "Jun 28 (Sat)", kst: "00:00", home: "Egypt", away: "Iran", venue: "Lumen Field, Seattle" },
  { id: 66, stage: "Group G", date: "Jun 28 (Sat)", kst: "00:00", home: "New Zealand", away: "Belgium", venue: "BC Place, Vancouver" },
  { id: 67, stage: "Group L", date: "Jun 28 (Sat)", kst: "06:00", home: "Panama", away: "England", venue: "MetLife, NY/NJ" },
  { id: 68, stage: "Group L", date: "Jun 28 (Sat)", kst: "06:00", home: "Croatia", away: "Ghana", venue: "Lincoln Financial, Philadelphia" },
  { id: 69, stage: "Group K", date: "Jun 28 (Sat)", kst: "08:30", home: "Colombia", away: "Portugal", venue: "Hard Rock, Miami" },
  { id: 70, stage: "Group K", date: "Jun 28 (Sat)", kst: "08:30", home: "DR Congo", away: "Uzbekistan", venue: "Mercedes-Benz, Atlanta" },
  { id: 71, stage: "Group J", date: "Jun 28 (Sat)", kst: "11:00", home: "Algeria", away: "Austria", venue: "Arrowhead, Kansas City" },
  { id: 72, stage: "Group J", date: "Jun 28 (Sat)", kst: "11:00", home: "Jordan", away: "Argentina", venue: "AT&T, Dallas" },
  // KNOCKOUT
  { id: 73, stage: "Round of 32", date: "Jun 29 (Mon)", kst: "04:00", home: "2nd A", away: "2nd B", venue: "SoFi, Los Angeles" },
  { id: 74, stage: "Round of 32", date: "Jun 30 (Tue)", kst: "02:00", home: "1st C", away: "2nd F", venue: "NRG, Houston" },
  { id: 75, stage: "Round of 32", date: "Jun 30 (Tue)", kst: "05:30", home: "1st E", away: "Best 3rd", venue: "Gillette, Boston" },
  { id: 76, stage: "Round of 32", date: "Jun 30 (Tue)", kst: "10:00", home: "1st F", away: "2nd C", venue: "BBVA, Monterrey" },
  { id: 77, stage: "Round of 32", date: "Jul 1 (Wed)", kst: "02:00", home: "2nd E", away: "2nd I", venue: "AT&T, Dallas" },
  { id: 78, stage: "Round of 32", date: "Jul 1 (Wed)", kst: "06:00", home: "1st I", away: "Best 3rd", venue: "MetLife, NY/NJ" },
  { id: 79, stage: "Round of 32", date: "Jul 1 (Wed)", kst: "10:00", home: "1st A", away: "Best 3rd", venue: "Azteca, Mexico City" },
  { id: 80, stage: "Round of 32", date: "Jul 2 (Thu)", kst: "01:00", home: "1st L", away: "Best 3rd", venue: "Mercedes-Benz, Atlanta" },
  { id: 81, stage: "Round of 32", date: "Jul 2 (Thu)", kst: "05:00", home: "1st G", away: "Best 3rd", venue: "Lumen Field, Seattle" },
  { id: 82, stage: "Round of 32", date: "Jul 2 (Thu)", kst: "09:00", home: "1st D", away: "Best 3rd", venue: "Levi's, Santa Clara" },
  { id: 83, stage: "Round of 32", date: "Jul 3 (Fri)", kst: "04:00", home: "1st H", away: "2nd J", venue: "SoFi, Los Angeles" },
  { id: 84, stage: "Round of 32", date: "Jul 3 (Fri)", kst: "08:00", home: "2nd K", away: "2nd L", venue: "BMO Field, Toronto" },
  { id: 85, stage: "Round of 32", date: "Jul 4 (Sat)", kst: "00:00", home: "1st B", away: "Best 3rd", venue: "BC Place, Vancouver" },
  { id: 86, stage: "Round of 32", date: "Jul 4 (Sat)", kst: "03:00", home: "2nd D", away: "2nd G", venue: "AT&T, Dallas" },
  { id: 87, stage: "Round of 32", date: "Jul 4 (Sat)", kst: "07:00", home: "1st J", away: "2nd H", venue: "Hard Rock, Miami" },
  { id: 88, stage: "Round of 32", date: "Jul 4 (Sat)", kst: "10:30", home: "1st K", away: "Best 3rd", venue: "Arrowhead, Kansas City" },
  { id: 89, stage: "Round of 16", date: "Jul 5 (Sun)", kst: "02:00", home: "R32 Winner", away: "R32 Winner", venue: "NRG, Houston" },
  { id: 90, stage: "Round of 16", date: "Jul 5 (Sun)", kst: "06:00", home: "R32 Winner", away: "R32 Winner", venue: "Lincoln Financial, Philadelphia" },
  { id: 91, stage: "Round of 16", date: "Jul 6 (Mon)", kst: "05:00", home: "R32 Winner", away: "R32 Winner", venue: "MetLife, NY/NJ" },
  { id: 92, stage: "Round of 16", date: "Jul 6 (Mon)", kst: "09:00", home: "R32 Winner", away: "R32 Winner", venue: "Azteca, Mexico City" },
  { id: 93, stage: "Round of 16", date: "Jul 7 (Tue)", kst: "04:00", home: "R32 Winner", away: "R32 Winner", venue: "AT&T, Dallas" },
  { id: 94, stage: "Round of 16", date: "Jul 7 (Tue)", kst: "09:00", home: "R32 Winner", away: "R32 Winner", venue: "Lumen Field, Seattle" },
  { id: 95, stage: "Round of 16", date: "Jul 8 (Wed)", kst: "01:00", home: "R32 Winner", away: "R32 Winner", venue: "Mercedes-Benz, Atlanta" },
  { id: 96, stage: "Round of 16", date: "Jul 8 (Wed)", kst: "05:00", home: "R32 Winner", away: "R32 Winner", venue: "BC Place, Vancouver" },
  { id: 97, stage: "Quarterfinal", date: "Jul 10 (Fri)", kst: "05:00", home: "R16 Winner", away: "R16 Winner", venue: "Gillette, Boston" },
  { id: 98, stage: "Quarterfinal", date: "Jul 11 (Sat)", kst: "04:00", home: "R16 Winner", away: "R16 Winner", venue: "SoFi, Los Angeles" },
  { id: 99, stage: "Quarterfinal", date: "Jul 12 (Sun)", kst: "06:00", home: "R16 Winner", away: "R16 Winner", venue: "Hard Rock, Miami" },
  { id: 100, stage: "Quarterfinal", date: "Jul 12 (Sun)", kst: "10:00", home: "R16 Winner", away: "R16 Winner", venue: "Arrowhead, Kansas City" },
  { id: 101, stage: "Semifinal", date: "Jul 15 (Wed)", kst: "04:00", home: "QF Winner", away: "QF Winner", venue: "AT&T, Dallas" },
  { id: 102, stage: "Semifinal", date: "Jul 16 (Thu)", kst: "04:00", home: "QF Winner", away: "QF Winner", venue: "Mercedes-Benz, Atlanta" },
  { id: 103, stage: "3rd Place", date: "Jul 19 (Sun)", kst: "06:00", home: "SF Loser", away: "SF Loser", venue: "Hard Rock, Miami" },
  { id: 104, stage: "🏆 FINAL", date: "Jul 20 (Mon)", kst: "04:00", home: "SF Winner", away: "SF Winner", venue: "MetLife, NY/NJ" },
];

const stageOrder = [
  "Group A", "Group B", "Group C", "Group D",
  "Group E", "Group F", "Group G", "Group H",
  "Group I", "Group J", "Group K", "Group L",
  "Round of 32", "Round of 16", "Quarterfinal", "Semifinal", "3rd Place", "🏆 FINAL"
];

const stageColors = {
  "Group A": "#e74c3c", "Group B": "#e67e22", "Group C": "#f1c40f",
  "Group D": "#2ecc71", "Group E": "#1abc9c", "Group F": "#3498db",
  "Group G": "#9b59b6", "Group H": "#e91e63", "Group I": "#ff5722",
  "Group J": "#00bcd4", "Group K": "#8bc34a", "Group L": "#ff9800",
  "Round of 32": "#607d8b", "Round of 16": "#5c6bc0",
  "Quarterfinal": "#7b1fa2", "Semifinal": "#c0392b", "3rd Place": "#795548", "🏆 FINAL": "#f39c12"
};

export default function WorldCupTracker() {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wc26_done") || "[]");
    } catch { return []; }
  });
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    try { localStorage.setItem("wc26_done", JSON.stringify(done)); } catch {}
  }, [done]);

  const toggle = (id) => setDone(d => d.includes(id) ? d.filter(x => x !== id) : [...d, id]);
  const clearAll = () => setDone([]);

  const stages = ["All", ...stageOrder];
  const filtered = matches.filter(m => {
    const stageMatch = filter === "All" || m.stage === filter;
    const q = search.toLowerCase();
    const searchMatch = !q || m.home.toLowerCase().includes(q) || m.away.toLowerCase().includes(q) || m.date.toLowerCase().includes(q) || m.stage.toLowerCase().includes(q);
    return stageMatch && searchMatch;
  });

  const grouped = {};
  filtered.forEach(m => {
    if (!grouped[m.stage]) grouped[m.stage] = [];
    grouped[m.stage].push(m);
  });

  const total = matches.length;
  const played = done.length;
  const pct = Math.round((played / total) * 100);

  return (
    <div style={{
      fontFamily: "'Courier New', Courier, monospace",
      background: "#0a0a0f",
      minHeight: "100vh",
      color: "#e8e8e8",
      padding: "0",
      userSelect: "none"
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        padding: "24px 20px 20px",
        borderBottom: "2px solid #f39c12",
        position: "sticky", top: 0, zIndex: 100
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 4, color: "#f39c12", textTransform: "uppercase", marginBottom: 2 }}>FIFA</div>
              <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: 1, color: "#fff" }}>WORLD CUP 2026</div>
              <div style={{ fontSize: 11, color: "#aaa", letterSpacing: 2 }}>KST MATCH TRACKER · 104 GAMES</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#f39c12" }}>{pct}%</div>
              <div style={{ fontSize: 11, color: "#aaa" }}>{played}/{total} played</div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ background: "#1a1a2e", borderRadius: 2, height: 6, marginBottom: 14, border: "1px solid #333" }}>
            <div style={{ background: "linear-gradient(90deg, #f39c12, #e74c3c)", height: "100%", width: `${pct}%`, borderRadius: 2, transition: "width 0.3s" }} />
          </div>
          {/* Search */}
          <input
            placeholder="Search team or date..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", background: "#0d0d1a", border: "1px solid #333", borderRadius: 4,
              color: "#e8e8e8", padding: "8px 12px", fontSize: 13, fontFamily: "inherit",
              boxSizing: "border-box", marginBottom: 10, outline: "none"
            }}
          />
          {/* Stage filter */}
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2 }}>
            {["All", "Groups", "Knockout"].map(f => (
              <button key={f} onClick={() => setFilter(f === "Groups" ? "Group A" : f === "Knockout" ? "Round of 32" : "All")}
                style={{
                  background: filter === f || (f === "Groups" && filter.startsWith("Group")) || (f === "Knockout" && !filter.startsWith("Group") && filter !== "All") ? "#f39c12" : "#1a1a2e",
                  color: filter === f || (f === "Groups" && filter.startsWith("Group")) || (f === "Knockout" && !filter.startsWith("Group") && filter !== "All") ? "#000" : "#aaa",
                  border: "1px solid #333", borderRadius: 3, padding: "4px 10px",
                  fontSize: 11, fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap", letterSpacing: 1
                }}>
                {f.toUpperCase()}
              </button>
            ))}
            {stageOrder.map(s => (
              <button key={s} onClick={() => setFilter(s)}
                style={{
                  background: filter === s ? stageColors[s] : "#1a1a2e",
                  color: filter === s ? "#fff" : "#777",
                  border: `1px solid ${filter === s ? stageColors[s] : "#333"}`,
                  borderRadius: 3, padding: "4px 10px",
                  fontSize: 11, fontFamily: "inherit", cursor: "pointer", whiteSpace: "nowrap"
                }}>
                {s.replace("Group ", "Grp ").replace("Round of ", "R").replace("Quarterfinal", "QF").replace("Semifinal", "SF").replace("🏆 FINAL", "FINAL")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matches */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "12px 16px 80px" }}>
        {stageOrder.filter(s => grouped[s]).map(stage => (
          <div key={stage} style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 11, letterSpacing: 3, color: stageColors[stage],
              textTransform: "uppercase", padding: "12px 0 8px",
              borderBottom: `1px solid ${stageColors[stage]}33`,
              marginBottom: 8, fontWeight: 700
            }}>
              {stage} — {grouped[stage].filter(m => done.includes(m.id)).length}/{grouped[stage].length} played
            </div>
            {grouped[stage].map(m => {
              const isDone = done.includes(m.id);
              return (
                <div key={m.id} onClick={() => toggle(m.id)}
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 12px", marginBottom: 4, borderRadius: 4,
                    background: isDone ? "#0d1a0d" : "#111118",
                    border: `1px solid ${isDone ? "#2ecc7144" : "#22222e"}`,
                    cursor: "pointer", transition: "all 0.15s",
                    opacity: isDone ? 0.55 : 1
                  }}>
                  {/* Checkbox */}
                  <div style={{
                    width: 18, height: 18, borderRadius: 3, flexShrink: 0,
                    background: isDone ? "#2ecc71" : "transparent",
                    border: `2px solid ${isDone ? "#2ecc71" : "#444"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, color: "#000", fontWeight: 900, transition: "all 0.15s"
                  }}>
                    {isDone ? "✓" : ""}
                  </div>
                  {/* Time */}
                  <div style={{ width: 48, flexShrink: 0 }}>
                    <div style={{ fontSize: 12, color: "#f39c12", fontWeight: 700 }}>{m.kst}</div>
                    <div style={{ fontSize: 9, color: "#666" }}>KST</div>
                  </div>
                  {/* Teams */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700, color: isDone ? "#666" : "#fff",
                      textDecoration: isDone ? "line-through" : "none",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                    }}>
                      {m.home} <span style={{ color: "#555" }}>vs</span> {m.away}
                    </div>
                    <div style={{ fontSize: 10, color: "#555", marginTop: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {m.date} · {m.venue}
                    </div>
                  </div>
                  {/* Stage badge */}
                  <div style={{
                    fontSize: 9, padding: "2px 6px", borderRadius: 2, flexShrink: 0,
                    background: stageColors[m.stage] + "22", color: stageColors[m.stage],
                    border: `1px solid ${stageColors[m.stage]}44`, letterSpacing: 1
                  }}>
                    {m.stage.replace("Group ", "").replace("Round of ", "R").replace("Quarterfinal", "QF").replace("Semifinal", "SF")}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        background: "#0a0a0f", borderTop: "1px solid #1a1a2e",
        padding: "12px 20px", display: "flex", justifyContent: "space-between",
        alignItems: "center", maxWidth: 700, margin: "0 auto"
      }}>
        <div style={{ fontSize: 11, color: "#555" }}>{total - played} matches remaining</div>
        <button onClick={clearAll} style={{
          background: "transparent", border: "1px solid #333", color: "#666",
          padding: "6px 14px", borderRadius: 3, fontSize: 11, fontFamily: "inherit",
          cursor: "pointer", letterSpacing: 1
        }}>
          RESET ALL
        </button>
      </div>
    </div>
  );
}
