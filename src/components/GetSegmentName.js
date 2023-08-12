export const GetSegmentName = (props) => {
  const { onChangeHandler, inputValue } = props;

  return (
    <div class="form-group">
      <label>Enter the Name of the Segment</label>
      <input
        value={inputValue}
        type="text"
        class="form-control"
        placeholder="Name of the segment"
        onChange={onChangeHandler}
      />
    </div>
  );
};