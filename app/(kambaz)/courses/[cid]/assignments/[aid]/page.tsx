import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue={assignment?.title ?? ""} /> <br />
      <span id="wd-assignment-id" className="text-sm text-neutral-500">
        Assignment id: {aid}
      </span>
      <br /><br />
      <textarea
        id="wd-description"
        defaultValue={assignment?.description ?? ""}
        rows={8}
        className="w-full"
      /> <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={assignment?.points ?? 100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                defaultValue={assignment?.due}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignment?.available}
              />
            </td>
          </tr>
        </tbody>
      </table>
      
      <br />
        <label htmlFor="wd-display-grade-as" className="text-right">Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className="w-full rounded border px-3 py-2">
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>

        <label htmlFor="wd-submission-type" className="self-start pt-2 text-right">
          Submission Type
        </label>
        <div className="space-y-3 rounded border p-4">
          <select id="wd-submission-type" defaultValue="ONLINE" className="w-full rounded border px-3 py-2">
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <div className="font-semibold">Online Entry Options</div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

        <div className="self-start pt-2 text-right">Assign</div>
        <div className="space-y-3 rounded border p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">Assign to</label>
            <input id="wd-assign-to" defaultValue="Everyone" className="w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label htmlFor="wd-due-date" className="mb-1 block font-semibold">Due</label>
            <input type="date" id="wd-due-date" defaultValue="2024-05-13" className="w-full rounded border px-3 py-2" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">Available from</label>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" className="w-full rounded border px-3 py-2" />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">Until</label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className="w-full rounded border px-3 py-2" />
            </div>
          </div>
        </div>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
        Cancel
      </Link>{" "}
      <Link href={`/courses/${cid}/assignments`} id="wd-save">
        Save
      </Link>
    </div>
  );
}