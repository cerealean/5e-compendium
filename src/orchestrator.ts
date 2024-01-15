import type { Item } from './types';

const hydrateSources = (item: Item): Item => {
    const textBlocks = item.text;
    if (!textBlocks?.length) {
        return item;
    }
    const extractedSources = textBlocks.filter(block => block.startsWith('Source'));
    if (extractedSources.length) {
        item.sources = extractedSources;
    }
    
    return item;
};

const compendiumJson = await import('./compendium.json');
const items = compendiumJson.compendium.item
                .map(hydrateSources);
const newCompendium = { item: items };
const newJson = JSON.stringify(newCompendium);

const fs = await import('fs/promises');
fs.writeFile('./compendium-transformed.json', newJson);
