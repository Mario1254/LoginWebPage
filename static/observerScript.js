let previousInputValues = {};

function getCharacterFromDOM(element) {
    let changedInputs = [];
    
    for (let child of element.children) {
        if (child.tagName === 'INPUT') {
            child.addEventListener('input', function() {
                // Check if the value has changed 
                if (previousInputValues[child.id] !== child.value) {
                    console.log(`Third-party script: ${child.id}, Value: ${child.value}`);
                    // Update the previous value 
                    previousInputValues[child.id] = child.value;
                }
            });
        }
        // Recursive call to check child elements
        changedInputs = changedInputs.concat(getCharacterFromDOM(child));
    }

    return changedInputs;
}

getCharacterFromDOM(document.body);



