export interface MdSliderPropsIF {
    contents: MdSliderContentIF[];
    auto?: {
        duration: number;
    };
    indicator?: boolean;
    height?: string;
}

export interface MdSliderContentIF {
    image: HTMLImageElement;
    headerText?: String;
    subHeaderText?: String;
}
