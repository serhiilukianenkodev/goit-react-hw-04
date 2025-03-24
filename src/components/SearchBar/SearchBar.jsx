import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import Button from "../Button/Button";

const SearchBar = ({ onSubmit }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value.trim();
    if (!query) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <form className={css.searchBarForm} onSubmit={handleSearchSubmit}>
        <input
          className={css.searchBarInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <Button type="submit">Search</Button>
      </form>
    </header>
  );
};

export default SearchBar;
