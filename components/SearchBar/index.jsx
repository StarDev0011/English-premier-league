import { SearchBarWrapper, SearchFieldWrapper } from "./styles"

export default function SearchBar() {
    return(
        <SearchBarWrapper>
            <h5>FIND YOUR MATH HERE</h5>
            <SearchFieldWrapper>
                <input type="text" placeholder="Enter Team, Venue or city" />
                <button>Search</button>
            </SearchFieldWrapper>
        </SearchBarWrapper>
    )
}