import { FC } from "react";
import { SearchBarProps } from "./types";

export const SearchBar: FC<SearchBarProps> = (props) => {
  const { location, setLocation, searchLocation } = props;

  return (
    <>
      <div className="text-center">
        <input
          className="shadow text-center outline-0 rounded-2xl py-2 w-2/6"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter a location"
        />
      </div>
    </>
  );
};
