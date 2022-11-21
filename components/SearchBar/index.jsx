import { SearchBarWrapper, SearchFieldWrapper } from "./styles"

export default function SearchBar({button_text}) {
    return(
        <SearchBarWrapper>
            <h5>FIND YOUR MATH HERE</h5>
            <SearchFieldWrapper>
                <input type="text" placeholder="Enter Team, Venue or city" />
                <button>{button_text}</button>
            </SearchFieldWrapper>
        </SearchBarWrapper>
    )
}