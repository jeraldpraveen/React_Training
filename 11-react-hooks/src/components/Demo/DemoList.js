import React, { useMemo } from "react";

const DemoList = (props) => {
  const { items } = props;

  console.log("DemoList Running");

  const sortedList = useMemo(() => {
    console.log("Items Sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div style={{ backgroundColor: "yellowgreen" }}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
