const arrayContainsSubstring = (array: string[], substring: string): boolean => {
    let containsSubstring = false;

    array.forEach((string) => {
        if (string.includes(substring)) containsSubstring = true;
    });

    return containsSubstring;
}

const addFirstChildElement = (targetElement: Element, elementToCreate: HTMLElement): void => {
    targetElement.insertBefore(elementToCreate, targetElement.firstChild);
}

const createHeading = (document: Document, headingText: string): HTMLHeadingElement => {
    const heading = document.createElement('h4');
    heading.classList.add('kicker-link');
    heading.innerText = headingText;
    return heading;
}

const headingsToAdd = [
    { id: 87097, heading: `Writers' Roundtable` },
    { id: 87017, heading: `Photos` },
    { id: 87164, heading: `Spurs Notebook` },
    { id: 87161, heading: `Off-Topic Conversation` },
    { id: 87094, heading: `Our Take` },
    { id: 87081, heading: 'Spurs by the Numbers' }
];


export const addCollectionHeadings = (document: Document, data: { id: number, heading: string }[] = headingsToAdd): void => {
    const collections = Array.from(document.getElementsByClassName('hide-rss-link'));

    data.forEach((data) => {
        collections.forEach((collection) => {
            if (arrayContainsSubstring(Array.from(collection.classList), data.id.toString())) {
                const heading = createHeading(document, data.heading);
                addFirstChildElement(collection, heading);
            }
        });
    });
}