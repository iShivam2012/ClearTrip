import "./Search.css";

const Search = ({ SearchHandler }) => {
  const onChangeHandler = (e) => {
    SearchHandler(e.target.value);
  };
  return <input className="search" onChange={onChangeHandler} type="text" />;
};
export default Search;
