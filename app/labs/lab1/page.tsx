import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./listTags";
import Tables from "./Tables";
import Images from "./Images";
import Forms from "./forms/Forms"
import HighlightedParagraphLab from "./HighlightedParagraph";
import HighlightedBoxLab from "./HighlightedBox";
import AnchorTag from "./AnchorTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      {/* do the next exercise here */}
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraphLab />
      <HighlightedBoxLab />
      <AnchorTag />
    </div>
  );
}