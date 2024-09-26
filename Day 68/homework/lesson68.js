const lowerText = text.toLowerCase();
const duplicates = [];

for(let i = 0; i < text.length; i++){}
    let count = 0;
    for(let x = 0; x < text.length; x++){
        if(lowerText[i] === lowerText[x]) {
            count++;
        }
    }

if(count > 1 && !duplicates.includes(lowerText[i])){
    duplicates.push(lowerText[i]);
}

return duplicates.length;

function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = new Map();

    for (const char of lowerText) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let duplicates = 0;
    for (const count of charCount.values()) {
        if (count > 1) {
            duplicates++;
        }
    }

    return duplicates;
}