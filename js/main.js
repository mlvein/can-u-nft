var resultPossible = 
    `
    <p>Yes, It's possible! Here are some popular platforms that have done so:</p>
        <ul>
            <li>makersplace</li>
            <li>rarible</li>
        </ul>
    `;

function search() {
    var searchResult;
    var searchQuery = document.getElementById("input001").value;
    // searchQuery = searchQuery.toLowerCase;
    
    
    switch (searchQuery) {
        case "chicken":
            searchResult = "Hmm... it might be possible!";
        break;
        case "art":
        case "music":
            searchResult = resultPossible;
        break;
        case "cats":
            searchResult = "Well... sort of";
        break;
        default:
            searchResult = "Not sure...";
        break;
    }

    document.getElementById("result").innerHTML = searchResult;
  }