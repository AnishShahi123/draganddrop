import { useDrag } from "react-dnd";
import PropTypes from "prop-types";

export const PictureListView = ({ id, name, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor?.isDragging(),
    }),
  }));
  return (
    <div className="avengersview">
      <img
        src={url}
        id={id}
        ref={drag}
        width={"150px"}
        height={"100px"}
        style={{
          border: isDragging ? "5px solid pink" : "0px",
          margin: "10px",
        }}
      />
      <p>{name}</p>
    </div>
  );
};

PictureListView.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
