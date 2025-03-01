
import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

import FrontCard from '../atoms/FrontCard';
import BackCard from '../atoms/BackCard';
import ReactCardFlip from 'react-card-flip';

function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef, // エレメントの指定？
    transform, // リストの動きの指定
    transition,
  } = useSortable({id: props.id});

  // リストの動きの部分
  const style = {
    // CSSの中のtransform要素をTostringで持ってくる
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ReactCardFlip isFlipped={props.isFlipped} key={props.id}>
          {/* <FrontCard name={name} func={flipCard} /> */}
          <FrontCard name={props.id} />
          <BackCard name={props.id} />
      </ReactCardFlip>
    </div>
  );
}

export default SortableItem