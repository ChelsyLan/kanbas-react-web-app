export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br/>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description" cols={30} rows={10}>
          The assignment is available online. Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" placeholder="100" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td align="left" valign="top">
                <select id="wd-group">
                  <option value="VAL1">Assignment</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display grade as</label>
              </td>
              <td align="left" valign="top">
                <select id="wd-display-grade-as">
                  <option value="VAL1">Percentage</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission type</label>
              </td>
              <td align="left" valign="top">
                <select id="wd-submission-type">
                  <option value="VAL1">Online</option>
                </select>
              </td>
            </tr>
            <br />
            <tr align="right">
              <td align="left">
                <label>
                  <strong>Online Entry Options</strong>
                </label>
                <br />
                <input type="checkbox" name="entry-option" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="entry-option" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input
                  type="checkbox"
                  name="entry-option"
                  id="wd-media-recordings"
                />
                <label htmlFor="wd-media-recordings">Media recordings</label>
                <br />
                <input
                  type="checkbox"
                  name="entry-option"
                  id="wd-student-annotation"
                />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="entry-option" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Upload</label>
                <br />
              </td>
            </tr>
            <br />
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
              </td>
              <td align="left" valign="top">
                <select id="wd-assign-to">
                  <option value="VAL1">Everyone</option>
                </select>
              </td>
            </tr>
            <br />
            <tr>
              <td align="right">
                <label htmlFor="wd-due-date"> Date</label>
                <br />
                <input
                  align="right"
                  type="date"
                  id="wd-due-tdate"
                  value="2024-05-13"
                />
              </td>
            </tr>
            <br />
  
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </td>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available Until</label>
              </td>
              <td>
                <input type="date" id="wd-available-until" value="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <br />
        <div style={{ textAlign: 'right' }}>
          <button>Cancel</button>
  
          <button>Save</button>
        </div>
      </div>
    );
  }
  