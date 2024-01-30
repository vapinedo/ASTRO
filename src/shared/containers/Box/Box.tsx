import './Box.css';

export default function Box({ children }) {

    // function handleDelete(uuid) {
    //     // const newComponentInstances = componentInstances.filter();
    //     console.log(componentInstances);
    //     console.log(uuid);
    // }

    return (
        <section className='box'>
            {children}
        </section>
    )
}
