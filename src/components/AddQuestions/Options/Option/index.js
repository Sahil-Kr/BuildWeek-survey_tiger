import classes from "./index.module.css";
import { updateOptionList } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

const Option = (props) => {
  const dispatch = useDispatch();
  // dispatch(updateOptionList({ id: props.customId, content: "" }));

  return (
    <div className={classes.Option}>
      <input
        type="text"
        placeholder="Type answer here"
        onChange={(e) => {
          dispatch(
            updateOptionList({ id: props.customId, content: e.target.value })
          );
        }}
      />
      <div className={classes.Tool}>
        <span onClick={props.add} id={props.customId}>
          &#10011;
        </span>
        <span onClick={props.del} id={props.customId}>
          &#9866;
        </span>
      </div>
    </div>
  );
};

export default Option;
