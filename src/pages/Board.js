import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import StoreApi from "../services/storeApi";
import CardList from "../components/List";
import { getBoardApiMethod } from "../services/kanbanApi";

export default function Board() {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getBoardApiMethod({ name }).then((board) => {
      if (mounted) {
        setData(board);
      }
    });
    return () => (mounted = false);
  }, [name]);

  const addNewCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const updatedCardList = data.cardlists[listId];
    updatedCardList.cards = [...updatedCardList.cards, newCard];

    const newState = {
      ...data,
      cardlists: {
        ...data.cardlists,
        [listId]: updatedCardList,
      },
    };

    setData(newState);
  };
  return (
    <StoreApi.Provider value={{ addNewCard }}>
      <div>
        Board {name}
        {data.listIds.map((listId) => {
          const cardList = data.cardlists[listId];
          return <CardList list={cardList} key={listId} />;
        })}
      </div>
    </StoreApi.Provider>
  );
}
