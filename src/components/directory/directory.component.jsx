import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        const { id } = category;
        return <DirectoryItem key={id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
