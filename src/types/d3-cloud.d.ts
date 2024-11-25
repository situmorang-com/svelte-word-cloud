declare module 'd3-cloud' {
    interface Word {
        text: string;
        size: number;
        x?: number;
        y?: number;
        rotate?: number;
    }

    interface Cloud {
        start(): void;
        stop?(): void;
        size(size: [number, number]): Cloud;
        words(words: Word[]): Cloud;
        font(font: string): Cloud;
        fontSize(size: (word: Word) => number | number): Cloud;
        padding(padding: number | ((word: Word) => number)): Cloud;
        rotate(degree: (word: Word) => number | number): Cloud;
        on(event: 'word' | 'end', callback: (words: Word[], bounds?: [number, number]) => void): Cloud;
        random?(): Cloud;
    }

    export default function cloud(): Cloud;
}
