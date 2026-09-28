export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-your-image"
        width="400px"
        alt="Boston buildings"
        src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Boston_à_lheure_bleue_%284769294947%29.jpg?utm_source=en.wikivoyage.org&utm_campaign=index&utm_content=original"
      />
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Spitzer Space Telescope image of the M87 galaxy"
        src="https://images-assets.nasa.gov/image/PIA23122/PIA23122~medium.jpg"
      />
    </div>
  );
}