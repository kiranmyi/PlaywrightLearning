function launchBrowser(browser) {
    if (browser=== "chrome") {
        console.log("This is chrome browser");
    }
    else {
        console.log("This is not chrome browser");
    }

}

function runTests(testType) {
 switch (testType) {
    case "smoke":
        console.log("This is Smoke test");
        break;
    case "sanity":
        console.log("This is Sanity test");
        break;
    case "regression":
        console.log("This is Regression test");
        break;
    default:
        console.log("This is Default Smoke test");
    
 }

}

let browser = "chrome";
let testType = "black";
launchBrowser(browser);
runTests(testType);