"use client";
import { useState, use } from "react";
import Link from "next/link";

export default function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = use(params);
  const [selectionType, setSelectionType] = useState("Online");

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select name="wd-group" id="wd-group">
                    <option value="Assignments">Assignments</option>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Exams">Exams</option>
                    <option value="Projects">Projects</option>
                </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select name="wd-display-grade-as" id="wd-display-grade-as" defaultValue="Percentage">
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-selection-type">Selection Type</label>
            </td>
            <td>
                <select
                  name="wd-selection-type"
                  id="wd-selection-type"
                  value={selectionType}
                  onChange={(e) => setSelectionType(e.target.value)}
                >
                    <option value="Online">Online</option>
                    <option value="In-Person">In-Person</option>
                </select>
            </td>
          </tr>

          {selectionType === "Online" && (
            <tr>
              <td></td>
              <td>
                <div id="wd-online-entry-options">
                  <h4>Online Entry Options</h4>

                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry">Text Entry</label>
                  <br />

                  <input type="checkbox" id="wd-website-url" defaultChecked />
                  <label htmlFor="wd-website-url">Website URL</label>
                  <br />

                  <input type="checkbox" id="wd-media-recordings" />
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                  <br />

                  <input type="checkbox" id="wd-student-annotation" />
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                  <br />

                  <input type="checkbox" id="wd-file-uploads" />
                  <label htmlFor="wd-file-uploads">File Uploads</label>
                </div>
              </td>
            </tr>
          )}

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
              <br />
              <br />

              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input
                type="datetime-local"
                id="wd-due-date"
              />
              <br />
              <br />

              <label htmlFor="wd-available-from">Available from</label>{" "}
              <br />
              <input
                type="datetime-local"
                id="wd-available-from"
              />{" "}
              <label htmlFor="wd-available-until">Until</label>
              <input type="datetime-local" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </table>
      
      <Link href={`/courses/${cid}/assignments`} id="wd-cancel">Cancel</Link>
      <br />
      <Link href={`/courses/${cid}/assignments`} id="wd-save"> Save</Link>
    </div>
  );
}