import { useFormik } from "formik";

export default function FormikEx2Component()
{
    function ValidateUser(userDetails)
    {
        const errors = {};

        if(userDetails.Username === ""){
            errors.Username = "User Name Required";
        }
        if(userDetails.Mobile.match(/\+91\d{10}/))
        {
            errors.Mobile="";
        }
        else
        {
            errors.Mobile = "Invalid Mobile";
        }
        return errors;
    }


    const formik=useFormik({
        initialValues:{
            Username: '',
            Mobile: ''
        },
        validate: ValidateUser,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="Username" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.Username} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Username}</dd>

                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit" value="Submit">Register</button>
            </form>
        </div>
    )
}