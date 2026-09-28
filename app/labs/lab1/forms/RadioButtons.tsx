export default function RadioButtons() {
  return (
    <>
      <h5 id="wd-radio-buttons">Radio buttons</h5>
      <label>Favorite movie genre:</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-comedy" />
      <label htmlFor="wd-radio-comedy">Comedy</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-drama" />
      <label htmlFor="wd-radio-drama">Drama</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-scifi" />
      <label htmlFor="wd-radio-scifi">Science Fiction</label>
      <br />
      <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
      <label htmlFor="wd-radio-fantasy">Fantasy</label>
      <br />
      <label>How often do you watch movies?</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-daily" />
      <label htmlFor="wd-radio-daily">Daily</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-weekly" />
      <label htmlFor="wd-radio-weekly">Weekly</label>
      <br />
      <input type="radio" name="radio-frequency" id="wd-radio-rarely" />
      <label htmlFor="wd-radio-rarely">Rarely</label>
      <br />
      <label>Give it a rating</label>
      <br />
      
      <label>
        <input type="radio" name="stars" id="wd-radio-1" /> 1 star
        <input type="radio" name="stars" id="wd-radio-2" /> 2 stars
        <input type="radio" name="stars" id="wd-radio-3" /> 3 stars
        <input type="radio" name="stars" id="wd-radio-4" /> 4 stars
        <input type="radio" name="stars" id="wd-radio-5" /> 5 stars
      </label>
      
    </>
  );
}