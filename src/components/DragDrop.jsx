import { useState } from "react";
import { PictureListView } from "./PictureListView";
import { useDrop } from "react-dnd";

const AvengersTeam = [
  {
    id: 1,
    name: "Iron Man",
    url: "https://i0.wp.com/insider-gaming.com/wp-content/uploads/2022/10/iron-man-playtesting.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    id: 2,
    name: "Captain America",
    url: "https://media.wired.com/photos/59270270f3e2356fd800b2dc/4:3/w_929,h_697,c_limit/Marvel.jpg",
  },
  //   {
  //     id: 3,
  //     name: "Thor",
  //     url: "https://www.marvel.com/characters/thor-thor-odinson",
  //   },
  //   {
  //     id: 4,
  //     name: "Hulk",
  //     url: "https://www.marvel.com/characters/hulk-bruce-banner",
  //   },
  //   {
  //     id: 5,
  //     name: "Black Widow",
  //     url: "https://www.marvel.com/characters/black-widow-natasha-romanoff",
  //   },
  //   {
  //     id: 6,
  //     name: "Hawkeye",
  //     url: "https://www.marvel.com/characters/hawkeye-clint-barton",
  //   },
  //   {
  //     id: 7,
  //     name: "Scarlet Witch",
  //     url: "https://www.marvel.com/characters/scarlet-witch-wanda-maximoff",
  //   },
  //   {
  //     id: 8,
  //     name: "Vision",
  //     url: "https://www.marvel.com/characters/vision",
  //   },
  //   {
  //     id: 9,
  //     name: "Black Panther",
  //     url: "https://www.marvel.com/characters/black-panther-t-challa",
  //   },
  //   {
  //     id: 10,
  //     name: "Doctor Strange",
  //     url: "https://www.marvel.com/characters/doctor-strange-stephen-strange",
  //   },
  //   {
  //     id: 11,
  //     name: "Spider-Man",
  //     url: "https://www.marvel.com/characters/spider-man-peter-parker",
  //   },
  //   {
  //     id: 12,
  //     name: "Ant-Man",
  //     url: "https://www.marvel.com/characters/ant-man-scott-lang",
  //   },
  //   {
  //     id: 13,
  //     name: "Wasp",
  //     url: "https://www.marvel.com/characters/wasp-hope-van-dyne",
  //   },
  //   {
  //     id: 14,
  //     name: "Falcon",
  //     url: "https://www.marvel.com/characters/falcon-sam-wilson",
  //   },
  //   {
  //     id: 15,
  //     name: "Winter Soldier",
  //     url: "https://www.marvel.com/characters/winter-soldier-bucky-barnes",
  //   },
  //   {
  //     id: 16,
  //     name: "Captain Marvel",
  //     url: "https://www.marvel.com/characters/captain-marvel-carol-danvers",
  //   },
];

export const DragDrop = () => {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: "image",
    drop: (item) => addImageToBoard(item?.id),
    collect: (monitor) => ({
      isOver: !!monitor?.isOver(),
    }),
  });

  const addImageToBoard = (id) => {
    const droppedList = AvengersTeam?.filter((avenger) => id === avenger?.id);
    setBoard((prevState) => [...prevState, droppedList[0]]);
  };
  return (
    <>
      <div
        className="pictureslist"
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
        }}
      >
        {AvengersTeam?.map((avenger) => {
          return (
            <PictureListView
              key={avenger?.id}
              id={avenger?.id}
              name={avenger?.name}
              url={avenger?.url}
            />
          );
        })}
      </div>
      <div
        className="boardtodrop"
        style={{
          display: "flex",
          width: "90%",
          height: "300px",
          border: "2px solid black",
        }}
        ref={drop}
      >
        {board?.map((dropped) => {
          return (
            <PictureListView
              key={dropped?.id}
              url={dropped?.url}
              id={dropped?.id}
            />
          );
        })}
      </div>
    </>
  );
};
