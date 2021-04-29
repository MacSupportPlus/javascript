function createAnchor(url, text, css){

    var anchor = document.createElement('a');
    anchor.setAttribute('class', css);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor
    
}

function createNavBar(anchor1, anchor2){
    var nav = document.createElement('nav');
    nav.setAttribute('class', "nav navbar-dark bg-warning");
    nav.append(anchor1);
    nav.append(anchor2);
    return nav
}

function createParagraph(text){

    var paragraph = document.createElement('p');
    paragraph.textContent = text;


    return paragraph
}
function createHeadline(text){
    var headline = document.createElement('h1');
    headline.textContent = text;
    return headline


}
// grab an element that already exists
function createSection(headline, paragraph, css){
    newSection = document.createElement('div');
    newSection.setAttribute('class', css);
    newSection.append(headline);
    newSection.append(paragraph);
    return newSection
}
function createSuperSection(headLine, paragraph, navbar){
    superSection1 = document.createElement('div');
    superSection1.append(headLine);
    superSection1.append(paragraph);
    superSection1.append(navbar);
    return superSection1
    
}

var container = document.querySelector('.container-fluid');


// create 2 anchor tags 

var homeAnchor = createAnchor("#", "Home", "nav-link");
var categoriesAnchor = createAnchor("#", "Categories", "nav-link");
var commentAnchor = createAnchor("#", "12 Comments", "nav-link");
var commentAnchor2 = createAnchor("#", "15 Comments", "nav-link");
var likeAnchor = createAnchor("#", "124 likes", "nav-link");
var likeAnchor2 = createAnchor("#", "45 likes", "nav-link");

var firstParagraph = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
var firstHeadline = createHeadline("Curse of the Current Reviews");
var firstSection = createSection(firstHeadline, firstParagraph, "bg-secondary")

var secondNavBar = createNavBar(commentAnchor, likeAnchor)
var thirdNavBar = createNavBar(commentAnchor2, likeAnchor2)

var secondParagraph = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
var thirdParagraph = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
var secondHeadline = createHeadline("Hello Watch Kit");
var thirdHeadline = createHeadline("Introduction to Swift")
var secondSection = createSuperSection(secondHeadline, secondParagraph, secondNavBar)
var thirdSection = createSuperSection(thirdHeadline, thirdParagraph, thirdNavBar)

// homeAnchor.textContent = "Home"
// homeAnchor.setAttribute('class', "nav-link active");

// var categoriesAnchor = document.createElement('a');
// categoriesAnchor.textContent = "Categories";
// categoriesAnchor.setAttribute('class', 'nav-link');


// create nav bar

var nav = document.createElement('nav');
nav.setAttribute('class', "nav navbar-dark navbar-lg bg-dark  justify-content-start")

nav.append(homeAnchor);
nav.append(categoriesAnchor);

container.append(nav);
container.append(firstSection);
container.append(secondSection);
container.append(thirdSection)


