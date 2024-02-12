import './Box.css';

export default function Box({ children }) {
    return (
        <section className='box'>
            {children}
        </section>
    )
}
