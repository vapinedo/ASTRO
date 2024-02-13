import "./Box.css";

export default function Box(props) {

    const { wrapperClass, children } = props;
    
    return (
        <section className={"box " + wrapperClass}>
            {children}
        </section>
    )
}
