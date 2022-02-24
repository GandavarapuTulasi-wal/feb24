import { useFormik } from "formik";
const Registration = () => {

    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            age: "",
            fullname: "",
        },

        onSubmit(values) {
            console.log(values)
            if (localStorage.getItem("userDetails")) {
                let userObject = JSON.parse(localStorage.getItem("userDetails"));
                userObject.push(values);
                userObject = JSON.stringify(userObject);
                localStorage.setItem("userDetails", userObject);
            }
            else {
                let userObject = [];
                userObject.push(values);
                userObject = JSON.stringify(userObject);
                localStorage.setItem("userDetails", userObject);
            }

        },
        validate() {
            const errors = {}
            if ((formik.values.password.length <= 4) || (formik.values.password.length >= 20)) {

                errors.password = "* min 4 characters and max 20 characters"

            }
            if ((formik.values.email.length <= 5) || (formik.values.email.length >= 30)) {
                errors.email = "* should be more than 5 characters and less than 30 characters"
            }
            if ((formik.values.age < 18) || (formik.values.age > 120)) {
                errors.age = "* should be a number between 18 and 120"
            }
            if ((formik.values.fullname.length < 5) || (formik.values.fullname.length > 20)) {
                errors.fullname = "* min 5 characters and max 20 characters"
            }
            return errors

        }
    });

    console.log(formik);
    return (

        <div class="card-container">
            <form onSubmit={formik.handleSubmit} noValidate className="Border">
                <h1>Registration page</h1>
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Email" /><br />
                <div className="text-danger">{formik.errors.email ? formik.errors.email : null}</div>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Password" />
                <div className="text-danger">{formik.errors.password ? formik.errors.password : null}</div>
                <input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter age" />
                <div className="text-danger">{formik.errors.age ? formik.errors.age : null}</div>
                <input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Fullname" />
                <div className="text-danger">{formik.errors.fullname ? formik.errors.fullname : null}</div>
                <div className="box">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Registration;