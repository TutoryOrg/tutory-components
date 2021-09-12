/// <reference types="react" />
interface ISimpleButton {
    title: string;
    color: string;
    onClick: Function;
}
declare const SimpleButton: ({ title, color, onClick }: ISimpleButton) => JSX.Element;
export { SimpleButton };
