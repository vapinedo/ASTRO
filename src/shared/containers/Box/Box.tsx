import './Box.css';

export default function Box({ title, children }) {
    return (
        <section className='box'>
            <header className='box-header'>
                <h4>{ title }</h4>
            </header>

            <div className="box-body">
                {children}
            </div>
        </section>
    )
}
