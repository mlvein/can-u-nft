var learnMore = '<p id="learnMore">Wanna know more about NFTs?<br><br><a onclick="resourceReveal()" href="#">Explore ></a></p>';
var aboutInfo = '<p id="aboutLink">This is a project by<br><a href="https://twitter.com/_melvinalvarez" target="_blank">@_melvinalvarez</a></p>';
var resourceLinks = learnMore;

var resultWildlife =
`
    <h4>Yes, It's possible!</h4>
    <hr>
    <p>
        Sources:
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
            Popular platforms:
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
    ${resourceLinks}
    ${aboutInfo}
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
        Popular platforms:
    </p>

    <ul>
        <li><a href="https://www.cryptokitties.co/" target="_blank">Cryptokitties</a></li>
        <li><a href="https://rarible.com/" target="_blank">rarible</a></li>
    </ul>
`;    
