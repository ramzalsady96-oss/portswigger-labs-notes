const params =
    new URLSearchParams(
        window.location.search
    );

const userInput =
    params.get("search");

const result =
    document.getElementById("result");

if (userInput) {

    const label =
        document.createElement("strong");

    label.textContent =
        "Search results for: ";

    result.appendChild(label);

    const text =
        document.createTextNode(
            userInput
        );

    result.appendChild(text);

} else {

    result.textContent =
        "Enter a search term to view the result.";

}