import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";

import "./CardStyle.scss";

const Card = (props) => {
  //принимает в себя объект props, содержащий данные о конкретной карточке
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <>
          <div></div>
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        </>
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//CompactCard
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="card__compact"
      onClick={setExpanded}
      layoutId="expandableCard"
      data-layout={param.context}
    >
      <div className="card__compact_content">
        <span>{param.title}</span>
        <div className="card__detail">
          <span>{param.content}</span>
        </div>
        <span>{param.subcontent}</span>
      </div>
    </motion.div>
  );
}

//ExpandedCard
function ExpandedCard({ param, setExpanded }) {
  return (
    <div className="card__expanded_bg">
      <motion.div
        className="card__expanded container"
        layoutId="expandableCard"
      >
        <div
          style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}
        >
          <UilTimes onClick={setExpanded} />
        </div>
        <div className="card__detail">
          <span>{param.expanded}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
