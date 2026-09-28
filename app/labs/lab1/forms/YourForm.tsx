export default function YourForm() {
    return (
        <div id="wd-your-form">
            <h4>Student Profile</h4>

            <label htmlFor="wd-your-form-first-name">First Name:</label>
            <input
                type="text"
                id="wd-your-form-first-name"
                placeholder="Jane"
                defaultValue="Jane"
            />
            <br />

            <label htmlFor="wd-your-form-last-name">Last Name:</label>
            <input
                type="text"
                id="wd-your-form-last-name"
                placeholder="Doe"
                defaultValue="Doe"
            />
            <br />

            <label htmlFor="wd-your-form-password">Password:</label>
            <input
                type="password"
                id="wd-your-form-password"
                placeholder="Password"
            />
            <br />

            <label htmlFor="wd-your-form-email">Email:</label>
            <input
                type="email"
                id="wd-your-form-email"
                placeholder="jane@university.edu"
                defaultValue="jane@university.edu"
            />
            <br />

            <label htmlFor="wd-your-form-grad-year">Graduation Year:</label>
            <input
                type="number"
                id="wd-your-form-grad-year"
                min={2024}
                max={2030}
                defaultValue={2026}
            />
            <br />

            <label htmlFor="wd-your-form-birthday">Date of Birth:</label>
            <input
                type="date"
                id="wd-your-form-birthday"
                defaultValue="2004-05-15"
            />
            <br />

            <label htmlFor="wd-your-form-excitement">
                Excitement Level (0-10):
            </label>
            <input
                type="range"
                id="wd-your-form-excitement"
                min={0}
                max={10}
                defaultValue={7}
            />
            <br />

            <label htmlFor="wd-your-form-bio">Short Bio:</label>
            <br />
            <textarea
                name="studentBio"
                id="wd-your-form-bio"
                cols={40}
                rows={4}
                placeholder="Tell us about yourself..."
                defaultValue="Sample bio text goes here."
            />
            <br />

            <p>Class Standing:</p>
            <input
                type="radio"
                name="class-standing"
                id="wd-your-form-freshman"
            />
            <label htmlFor="wd-your-form-freshman"> Freshman</label>
            <br />
            <input
                type="radio"
                name="class-standing"
                id="wd-your-form-sophomore"
                defaultChecked
            />
            <label htmlFor="wd-your-form-sophomore"> Sophomore</label>
            <br />
            <input
                type="radio"
                name="class-standing"
                id="wd-your-form-junior"
            />
            <label htmlFor="wd-your-form-junior"> Junior</label>
            <br />
            <input
                type="radio"
                name="class-standing"
                id="wd-your-form-senior"
            />
            <label htmlFor="wd-your-form-senior"> Senior</label>
            <br />

            <p>Enrollment Status:</p>
            <input
                type="radio"
                name="enrollment-status"
                id="wd-your-form-full-time"
                defaultChecked
            />
            <label htmlFor="wd-your-form-full-time"> Full-time</label>
            <input
                type="radio"
                name="enrollment-status"
                id="wd-your-form-part-time"
            />
            <label htmlFor="wd-your-form-part-time"> Part-time</label>
            <br />

            <p>Which programming languages do you know?</p>
            <input
                type="checkbox"
                name="languages"
                id="wd-your-form-java"
            />
            <label htmlFor="wd-your-form-java"> Java</label>
            <input
                type="checkbox"
                name="languages"
                id="wd-your-form-python"
                defaultChecked
            />
            <label htmlFor="wd-your-form-python"> Python</label>
            <input
                type="checkbox"
                name="languages"
                id="wd-your-form-javascript"
                defaultChecked
            />
            <label htmlFor="wd-your-form-javascript"> JavaScript</label>
            <input
                type="checkbox"
                name="languages"
                id="wd-your-form-cpp"
            />
            <label htmlFor="wd-your-form-cpp"> C++</label>
            <br />

            <label htmlFor="wd-your-form-university">University:</label>
            <br />
            <select id="wd-your-form-university" defaultValue="RUT">
                <option value="RUT">Rutgers</option>
                <option value="PS">Penn State</option>
                <option value="UMD">University of Maryland</option>
                <option value="IU">Indiana University</option>
            </select>
            <br />

            <label htmlFor="wd-your-form-interests">Interests:</label>
            <br />
            <select
                multiple
                id="wd-your-form-interests"
                defaultValue={["MUSIC", "SPORTS"]}
            >
                <option value="MUSIC">Music</option>
                <option value="SPORTS">Sports</option>
                <option value="ART">Art</option>
                <option value="GAMING">Gaming</option>
                <option value="READING">Reading</option>
            </select>
            <br />
            <br />

            <button id="wd-your-form-save" type="submit">
                Save
            </button>
            <button id="wd-your-form-cancel" type="button">
                Cancel
            </button>
        </div>
    );
}
