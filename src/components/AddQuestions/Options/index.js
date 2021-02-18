import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
import { deleteOption } from "../../../redux/actions/";

import Option from "./Option/index";
import { useDispatch } from "react-redux";

const Options = (props) => {
  const [optionList, setOptionList] = useState([]);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0);

  // const onChangeHandler = (e, id, list) => {
  //   list[id] = e.target.value;
  // };

  const addOption = () => {
    const list = [];
    let i = optionList.length;
    const id = ("" + Math.random() * (i + 1)).split(".")[1];

    list.push(
      <Option
        key={id}
        customId={id}
        add={addOption}
        del={() => delOption(id)}
      />
    );
    setOptionList((optionList) => {
      if (
        (props.type === 1 && optionList.length >= 4) ||
        (props.type === 2 && optionList.length >= 2)
      )
        return optionList;
      return optionList.concat(list);
    });
  };

  const delOption = (id) => {
    setOptionList((optionList) => {
      if (optionList.length <= 2) return optionList;
      const idx = optionList.findIndex((option) => option.key === id);
      const list = optionList.slice();
      list.splice(idx, 1);
      return list;
    });
    // console.log(idx);
    dispatch(deleteOption(id));

    // dispatch(updateOptions(1));
  };

  useEffect(() => {
    // console.log("inside useEffeect", props.type);
    const list = [];

    if (props.type === 1) {
      let i = 0;
      const id = ("" + Math.random() * (i + 1)).split(".")[1];

      list.push(
        <Option
          key={id}
          customId={id}
          add={addOption}
          del={(e) => delOption(e.target.id)}
        />
      );
    } else {
      let i = 0;
      let id = ("" + Math.random() * (i + 1)).split(".")[1];

      list.push(
        <Option
          key={id}
          customId={id}
          add={addOption}
          del={(e) => delOption(e.target.id)}
        />
      );
      i++;
      id = ("" + Math.random() * (i + 1)).split(".")[1];
      list.push(
        <Option
          key={id}
          customId={id}
          add={addOption}
          del={(e) => delOption(e.target.id)}
        />
      );
    }

    setOptionList(list);

    return () => {
      console.log("unmounted", props.type);
    };
  }, [props.type]);

  return <>{optionList}</>;
};

export default Options;
