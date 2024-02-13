import "./Box.css";

export default function Box(props) {

    const { wrapperClass, children } = props;
    
    return (
        <article className={"box " + wrapperClass}>
            {children}
        </article>
    )
}
