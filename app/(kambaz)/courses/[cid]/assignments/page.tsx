import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      {/* search input, + Group, + Assignment */}
      <input type="search" id="wd-search-assignment" placeholder="Search for Assignments"/>
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      {/* h3 wd-assignments-title */}
      <br />
      <h3 id="wd-assignments-title" style={{ display: "inline-block" }}>
        ASSIGNMENTS 40% of Total
      </h3>
      <button id="wd-add-assignment-button">+</button>
      <ul id="wd-assignment-list">
        {/* at least three AssignmentItems using cid */}
        <AssignmentItem
          cid={cid}
          aid="1"
          title="A1 ENV + HTML"
          details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
        />

        <AssignmentItem
         cid={cid}
         aid="2"
         title="A2 CSS + TAILWIND"
         details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
        />

        <AssignmentItem
         cid={cid}
         aid="3"
         title="A3 JS + REACT"
         details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
        />
      </ul>
    </div>
  );
}