var resultWildlife =
`
    <h4>Yes, It's possible!</h4>
    <hr>
    <p>
        Here are some platforms that have done so:
    </p>

    <ul>
        <li><a href="https://wildcards.world/" target="_blank">wildcards</a></li>
    </ul>
`
  
var resultPossibleArt = 
    `
        <h4>Yes, It's possible!</h4>
        <hr>
        <p>
            Here are some platforms that have done so:
        </p>
        
        <ul>
            <li><a href="https://makersplace.com/" target="_blank">makersplace</a></li>
            <li><a href="https://rarible.com/" target="_blank">rarible</a></li>
        </ul>
    `;

var defaultResponse =
    `
    <h4>I'm not sure...</h4>
    <hr>
    <p>
        Know more about NFTs here:
    </p>
    `;

var respondBlank = 
    `
    <h4>You left it blank...</h4>
    `;    

var resultCats =
`
    <h4>Yes! Well, sort of...</h4>
    <hr>
    <p>
        Here are some platforms that have done so:
    </p>

    <ul>
        <li><a href="https://www.cryptokitties.co/" target="_blank">Cryptokitties</a></li>
        <li><a href="https://rarible.com/" target="_blank">rarible</a></li>
    </ul>
`;    

function search() {
    var searchResult;
    var searchQuery = document.getElementById("input001").value;
    
    
    switch (searchQuery) {
        case "":
            searchResult = respondBlank;
        break;
        case "art":
        case "collectibles":
            searchResult = resultPossibleArt;
        break;
        case "cats":
        case "a cat":
        case "cat":
            searchResult = resultCats;
        break;
        case "animals":
        case "wildlife":
            searchResult = resultWildlife;
        break;
        default:
            searchResult = defaultResponse;
        break;
    }

    document.getElementById("result").innerHTML = searchResult;
  }