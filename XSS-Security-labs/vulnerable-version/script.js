const params =
    new URLSearchParams(
        window.location.search
    );

const userInput =
    params.get("search");

const result =
    document.getElementById("result");

if (userInput) {

    result.innerHTML =
        "<strong>Search results for:</strong> "
        + userInput;

} else {

    result.textContent =
        "Enter a search term to view the result.";

}