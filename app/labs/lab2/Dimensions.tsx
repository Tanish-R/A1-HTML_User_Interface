export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This box is fixed at 120px wide and 60px tall, so this long sentence
          wraps inside it and spills out past the bottom edge.
        </div>
        <div className="wd-dimension-custom wd-bg-color-green wd-fg-color-white">
            Another box that I created and want to test the dimensions of</div>
      </div>
    </div>
  );
}