import React from './style.css';

let Contact = () => {
    const [formState, setFormState] = userState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            window.location.href = `mailto:rgarcia20.m@gmail.com?subject=New Contact from $(formState.name)$body=$(formState.message)`
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage(`What's up with the email?`);
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please leave a ${e.target.name}!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function validateEmail(email) {
        var re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section id="contact-me" className="content">
            <div className='title'>
                <h3>Contact Me</h3>
            </div>
            <div className="words">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label><br/>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label><br/>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className='submitBtn' data-testid="button" type="submit">Submit</button>
                </form>
                <div className='contactBox'>
                    <a href="mailto:rgarcia20.m@gmail.com">Email <span className='fa fa-envelope'></span></a>
                    <a href="https://github.com/saway11">GitHub <span className='fa fa-github'></span></a>
                    <a href="linkedin.com/in/rosa-maría-garcia-447937176">LinkedIn <span className='fa fa-linkedin'></span></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;