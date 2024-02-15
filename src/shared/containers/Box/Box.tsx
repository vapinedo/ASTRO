import "./Box.css";

export default function Box(props) {

    const { wrapperClass, children } = props;

    const elementClassName = wrapperClass 
        ? `box ${wrapperClass}`
        : "box";
    
    return (
        <article className={elementClassName}>
            {children}
        </article>
    )
}
